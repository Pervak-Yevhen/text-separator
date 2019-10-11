const S = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt eligendi enim esse eum, ex facilis fugiat hic ipsa ipsam maiores, molestias mollitia necessitatibus, pariatur quia quidem quis saepe voluptas!';
const test_S = 'SMS messages are really short';
const K = 12;

function getSMStext(S, K) {
    let arrOfWords = [];
    let arrOfSMS = [];
    let smsText = '';
    let smsCounter = 0;

    if(S.length <= K) return S;
    else arrOfWords = S.split(' ');

    arrOfWords.reduce((sms, curentWord, currentIndex) => {
        let newSMS = sms;
        newSMS += !!sms.length ? ` ${curentWord}` : curentWord;

        if(newSMS.length > K){
            arrOfSMS[smsCounter++] = sms;
            smsText = '';

            if(currentIndex === arrOfWords.length - 1) arrOfSMS[smsCounter++] = curentWord;
            return curentWord;
        } else if(newSMS.length <= K && currentIndex !== arrOfWords.length - 1) return newSMS;
        else if(currentIndex === arrOfWords.length - 1) return arrOfSMS[smsCounter++] = newSMS;
    }, smsText);

    return arrOfSMS.indexOf('') === -1 ? arrOfSMS : -1;
}

const result = getSMStext(S, K);

console.log('SMS:', result.length);
console.log('SMS text:', result);

console.assert(result.reduce((currenr, next) => (currenr + ' ' + next)) === S, 'pass');