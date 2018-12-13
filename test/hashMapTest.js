const assert = require('chai').assert
const Table = require('../hashMap')

const table = new Table(5);
table.insert("baa", 1);
table.insert("aba", 2);
table.insert("aba", 3);
table.insert("aac", 4);
table.insert("aac", 5);

describe("Hash Table", () => {
    it("Should implement hash", () => {
        assert.equal(table.hash("abc"), 4);
    });

    it("Should implement insert", () => {
        assert.equal(table.cells[table.hash("baa")].value, 1);
        assert.equal(table.cells[table.hash("aba")].next.value, 3);
        assert.equal(table.cells[table.hash("aac")].value, 5);
    });

    it("Should implement get", () => {
        assert.equal(table.get("baa"), 1);
        assert.equal(table.get("aba"), 3);
        assert.equal(table.get("aac"), 5);
        assert.equal(table.get("abc"), null);
    });

    it("Should implement getAll", () => {
        assert.deepEqual(table.getAll(), [[], [], [1, 3], [5], []]);
    });
});