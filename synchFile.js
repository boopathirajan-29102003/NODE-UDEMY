const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first','utf8')
const second=readFileSync('./content/second','utf8')

console.log(first,second)

writeFileSync(
    './content/sync.txt',
    `here is result: ${first} ${second}`,
    {flag:'a'}
)