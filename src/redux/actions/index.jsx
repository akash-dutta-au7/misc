export const INC_NUMBER = 'INC_NUMBER';
// export const DEC_NUMBER = 'DEC_NUMBER';

export const incrementNumber = (number) => {
  console.log('Hello from action');
  return {
    type: INC_NUMBER,
    payload: number,
  };
};

// export const decrement = (number) => {
//   return {
//     type: DEC_NUMBER,
//     number,
//   };
// };
