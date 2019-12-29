import { defangIPaddr} from './defangIPaddr';

describe('defangIPaddr', () => {
  test('should defanged IP address', () => {
    expect(defangIPaddr('1.1.1.1')).toEqual('1[.]1[.]1[.]1');
    expect(defangIPaddr('255.100.50.0')).toEqual('255[.]100[.]50[.]0');
  });
});
