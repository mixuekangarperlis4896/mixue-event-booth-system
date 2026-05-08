const SHEET_ID = "11Oz5YpbcBJbKpdikSzlX8fqouXlB7_3TDuehH-qJ2A8";

function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === "getStaff") {
      return getStaff();
    }

    return reply(true, "MPOC API running", {});
  } catch (err) {
    return reply(false, err.message, {});
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const tab = data.tab;
    const payload = data.payload;

    if (!tab || !payload) {
      return reply(false, "Missing tab or payload", {});
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(tab);

    if (!sheet) {
      return reply(false, "Tab not found: " + tab, {});
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(h => payload[h] || "");

    sheet.appendRow(row);

    return reply(true, "Saved successfully", {});
  } catch (err) {
    return reply(false, err.message, {});
  }
}

function getStaff() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName("Staff");

  if (!sheet) {
    return reply(false, "Staff tab not found", []);
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return reply(true, "No staff found", []);
  }

  const headers = values[0];
  const nameIndex = headers.indexOf("Name");
  const statusIndex = headers.indexOf("Status");

  if (nameIndex === -1) {
    return reply(false, "Header 'Name' not found in Staff tab", []);
  }

  const staff = values.slice(1)
    .filter(row => {
      const name = row[nameIndex];
      const status = statusIndex >= 0 ? row[statusIndex] : "Active";
      return name && String(status).toLowerCase() !== "inactive";
    })
    .map(row => ({
      name: row[nameIndex]
    }));

  return reply(true, "Staff loaded", staff);
}

function reply(success, message, data) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: success,
      message: message,
      data: data
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
