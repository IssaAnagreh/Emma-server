"use strict";

var request = require("supertest");

var app = require("../index");

var client = require("../db");

beforeAll(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client.connect());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});
afterAll(function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(client.close());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
describe("Get Questions Endpoint", function () {
  it("should fetch available questions", function _callee3() {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(request(app).get("/api/v1/questions"));

          case 2:
            response = _context3.sent;
            expect(response.statusCode).toBe(200);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});
describe("Post user Answers Endpoint with invalid data", function () {
  it("should post user answers with Error Invalid Data", function _callee4() {
    var response;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(request(app).post("/api/v1/answers").send({
              answers: [{
                questionId: "62117ce4ac881d0bb8733153",
                answer: "test@email.com"
              }]
            }));

          case 2:
            response = _context4.sent;
            expect(response.statusCode).toBe(400);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  it("should post user answers with Success", function _callee5() {
    var response;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(request(app).post("/api/v1/answers").send({
              answers: [{
                questionId: "62279777125ea86898f143e4",
                answer: "Female"
              }]
            }));

          case 2:
            response = _context5.sent;
            expect(response.statusCode).toBe(200);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
});