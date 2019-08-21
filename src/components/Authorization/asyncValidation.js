import {SubmissionError} from 'redux-form'

function submit(values) {
  return fetch("http://localhost:3000/validLogin", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  })
    .then(res => res.json())
    .then(res => {
        if (res) throw new SubmissionError({
          _error: 'Введен неверный пароль или профиль для данного e-mail не существует'
        })
      }
    )
    .catch(err => console.log(err))
}

export default submit;
