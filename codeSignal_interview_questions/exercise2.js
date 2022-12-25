"use strict";

//|==> Exercise: Your JS-based app needs to make two requests to an external API to fetch two sets of  data: 'customers' and 'orders'. Due to how you'll need to use this data, a good strategy is to match and merge the two lists into one: a list of 'customers' where each item can have a nested list of orders.

//Build a 'denormalize' function which takes in two arrays and the reference ID (foreign key), the first one being the primary type (in this case "denormalize(customers,orders,'customerID'))", and returns a new array with the nested structure described above.

//You can check the test file (with a couple of example cases) in the filesystem tab to your left.

const apiCall = {
  primary: [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
    {
      id: 3,
      name: "Richard Roe",
    },
  ],
  related: [
    {
      id: 1,
      customerId: 1,
      price: 999,
      product: "M1 MacBook Air",
    },
    {
      id: 2,
      customerId: 2,
      price: 1299,
      product: "PS5 + 2 games",
    },
    {
      id: 3,
      customerId: 1,
      price: 1199,
      product: "Dell XPS 9310",
    },
    {
      id: 4,
      customerId: 1,
      price: 999,
      product: "M1 MacBook Air",
    },
  ],
  relateName: "orders",
  referenceId: "customerId",
};

//Solution 1. (n^2)
function denormalize({ primary, related, relateName, referenceId }) {
  let newArr = [];
  for (let custumer of primary) {
    custumer[relateName] = [];
    for (let order of related) {
      if (custumer.id === order[referenceId]) {
        custumer[relateName].push(order);
      }
    }
    newArr.push(custumer);
  }
  return newArr;
}

//Solution 2. (n^2)
function denormalizeBetter({ primary, related, relateName, referenceId }) {
  let newArr = [];
  const iteration = (customers, index = 0) => {
    if (index === customers.length) return;
    let customer = customers[index];
    customer[relateName] = [];
    for (let i = 0; i < related.length; i++) {
      if (customer.id === related[i][referenceId]) {
        customer[relateName].push(related[i]);
      }
    }
    newArr.push(customer);
    iteration(customers, index + 1);
  };
  iteration(primary);
  return newArr;
}

//Solution 3. (n)
function denormalizeBetter2({ primary, related, relateName, referenceId }) {
  let newArr = [];
  // create hash map of related array
  let relatedMap = {};
  for (let i = 0; i < related.length; i++) {
    if (!relatedMap[related[i][referenceId]]) {
      relatedMap[related[i][referenceId]] = [];
    }
    relatedMap[related[i][referenceId]].push(related[i]);
  }

  const iteration = (customers, index = 0) => {
    if (index === customers.length) return;
    let customer = customers[index];
    if (relatedMap[customer.id]) {
      customer[relateName] = relatedMap[customer.id];
    }
    newArr.push(customer);
    iteration(customers, index + 1);
  };

  iteration(primary);
  return newArr;
}

console.log(denormalize(apiCall));
console.log(denormalizeBetter2(apiCall));
