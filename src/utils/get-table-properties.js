import { tables } from "../config/strings.json";

export const getTableProperties = (tableName) => {
  const { caption, columnHeaders } = tables[tableName];

  const columnData = Object.keys(columnHeaders).map((columnKey) => ({
    title: columnHeaders[columnKey],
    key: columnKey,
  }));

  return {
    caption,
    columnData,
  };
};
