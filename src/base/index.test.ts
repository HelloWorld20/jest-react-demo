import { add, fetchData, fetchError, fetchCb } from './index'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('promise', () => {
  return fetchData().then(data => {
    expect(data).toBe('success')
  })
})

test('async function', async () => {
  const data = await fetchData();
  expect(data).toBe('success');
})
// 写法2
test('async function', async () => {
  await fetchData().then(res => expect(res).toBe('success')) 
})
// 写法3
test('async function', async () => {
  await expect(fetchData()).resolves.toBe('success') 
})
// 写法1
test('async function error', async () => {
  // 期望返回的error值有error
  await expect(fetchError()).rejects.toMatch('error');
})
// 写法2
test('async function error', async () => {
  // 期望返回的error值有error
  fetchError().catch(e => expect(e).toMatch('error'))
})

// 异步回调
test('call back function', (done) => {
  fetchCb((data) => {
    expect(data).toBe('success')
    done()
  })
})
