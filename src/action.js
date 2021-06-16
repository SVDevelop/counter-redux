import {INCREASE, DECRESE} from './bollerplate'


export const increase = (amount) => ({
  type: INCREASE,
  payload: amount
});

export const decrease = (amount) => ({
  type: DECRESE,
  payload: amount
});

export const asyncDecrease = (amount, time) => ({
  type: DECRESE,
  payload: amount,
  time
});

export const asyncIncrease = (amount, time) => ({
  type: INCREASE,
  payload: amount,
  time
});