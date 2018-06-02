function setup () {

  const values = [];
  for (let i = 0; i < 15; i++) {
    values[i] = Math.random(0,100);
  }

  const shape = [5,3];

  const data = tf.tensor(values, shape);
  // (can't reassign a const)
  // const data = tf.tensor([0, 0, 127, 255, 12, 16, 69, 74],[2, 2, 2], 'int32');

  // print is just a helper method to see the tensor values
  // data.print();

  console.log(data.toString());
  // console.log(data);
}

setup();
