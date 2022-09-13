

export function getData() {
    return fetch('/jobs')
      .then(data => data.json())
  }