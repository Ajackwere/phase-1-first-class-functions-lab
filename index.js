// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(n) {
  return (n) => n * n;
}
// Another example
function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}
const fareDoubler = createFareMultiplier(2);
function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}
