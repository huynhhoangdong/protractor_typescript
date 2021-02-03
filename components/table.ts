import { by, ElementFinder } from "protractor";
export class Table {
    webTable: ElementFinder;

    constructor(webTableElement: ElementFinder) {
        this.webTable = webTableElement;
    }

    public async getRowCount() {
        let rows = this.webTable.all(by.tagName('tr'));
        let rowsNum = await rows.count();
        return rowsNum
    }
    public getRow(index: number) {
        let rows = this.webTable.all(by.tagName('tr'));
        return rows.get(index);
    }
    public async getColumnCount() {
        let cols = this.webTable.all(by.tagName('th'));
        let colsNum = await cols.count();
        return colsNum;
    }

    public async getRowColNum(){
        let rows = this.webTable.all(by.tagName('tr'));
        let rowsNum = await rows.count();
        let cols = this.webTable.all(by.tagName('th'));
        let colsNum = await cols.count();
        let json = {row: rowsNum, col: colsNum}
        return json;
    }

    public getRowData(id: number) {
        let rows = this.webTable.all(by.tagName('tr'));
        let rowsData = rows.get(id).getText().then((text)=>{
            console.log("Row " + id + " Data: " + text);
        })
        return rowsData;
    }
    public getColumnData(id: number) {
        let cols = this.webTable.all(by.tagName('td'));
        let colsData = cols.get(id).getText().then((text)=>{
            console.log("Col " + id + " Data: " + text);
        })
        return colsData;

    }
    public getCellData(row: number, col: number) {
        let colTag = row ? "td" : "th";
        let rows = this.webTable.all(by.tagName('tr'));
        let cols = rows.get(row).all(by.tagName(colTag));
        let cell = cols.get(col).getText().then((text)=>{
            console.log("Cell data at {row:" + row + ", col:" + col + "}: " + text);
        });
        return cell;

    }
    public getCell(row: number, col: number) {
        let colTag = row ? "td" : "th";
        let rows = this.webTable.all(by.tagName('tr'));
        let cols = rows.get(row).all(by.tagName(colTag));
        let cell = cols.get(col);
        return cell;
    }

    public clickButtonInCellByLinkText(row: number, col: number, name: string) {
        this.getCell(row, col).all(by.linkText(name)).get(0).click();
    }
    public clickButtonInCell(row: number, col: number) {
        this.getCell(row, col).click();
    }

    public getAllData() {

    }
    public presenceOfData(data: string) {

    }

}