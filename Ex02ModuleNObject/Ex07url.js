// url 생성자 활용
const {URL} = require('url');
const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%9B%94%EB%93%9C%EC%BB%B5+%EC%9D%BC%EC%A0%95');
// url의 전체 쿼리를 확인할 수 있다
console.log('searchParams : ', myURL.searchParams)
// 특정 키의 값 확인
console.log('searchParams.get() : ', myURL.searchParams.get('query'));
// 특정 키가 가지고 있는지 확인 (있으면 true / 없으면 false)
console.log('searchParams.has() : ', myURL.searchParams.has('page'));
// 키만 가지고 오고 싶을 때
console.log('searchParams.keys() : ', myURL.searchParams.keys())
// 값만 가지고 오고 싶을 때
console.log('searchParams.values() : ', myURL.searchParams.values())
// 키를 추가하고 싶을 때
myURL.searchParams.append('key', 'value1');
myURL.searchParams.append('key', 'value2');
// 가지고 오고자 하는 키의 값이 여러개라면?
console.log(myURL.searchParams.getAll('key'));
// 키를 수정하고 싶을 때
myURL.searchParams.set('key','value3');
console.log(myURL.searchParams.getAll('key'));
// 키를 지우고 싶을 때
myURL.searchParams.delete('key');
console.log(myURL.searchParams.getAll('key'));
// 특정 url을 그대로 가져오고 싶을 때
console.log('searchParams.toString() : ', myURL.searchParams.toString());