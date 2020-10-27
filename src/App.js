import { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'

import General from './components/General'
import Statement from './components/Statement'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Additional from './components/Additional';

class App extends Component {

  state = {
    statement: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem rerum aperiam, 
        ab corrupti tempora sit natus modi sed incidunt deleniti voluptas? Atque eligendi ea laborum eius 
        sit facilis, nisi ad illum corporis eveniet quisquam reiciendis delectus ipsam nobis officia, 
        provident corrupti repellendus mollitia obcaecati repellat cupiditate necessitatibus aliquam labore. 
        Perspiciatis doloribus deleniti atque magni laborum, soluta blanditiis fuga placeat repudiandae 
        dolorem modi porro saepe. Fuga explicabo quia deleniti atque eaque cupiditate, natus, nobis labore 
        ipsa sit facere rerum. Ullam!`,
    general: {
      firstName: 'Satoshi',
      surname: 'Nakamoto',
      phone: '01909-657422',
      email: 'noreply@anon.com',
      addressLine1: '420 The Avenue',
      addressLine2: '',
      city: 'Nobis Labore',
      country: 'Doloribus'
    },
    skills: [
      'Prolific tea maker',
      'Everyones favourite Colleague',
      'Can speak 5 different words in Japanese',
      `Completed 72% of a beginner's javascript course`,
      'Code Flounderer'
    ],
    experience: [{
      companyName: 'The Edo Period',
      position: 'Samurai',
      startDate: 'Jan 1600',
      endDate: '',
      duties: [
        'do',
        'bushi',
        'melodrama'
      ]
    }],
    education: [{
      school: 'A university',
      subject: 'Market Making',
      yearGraduate: 2020,
      qualification: 'Desmond',

    }],
    additional: 'None whatsoever'
  }
  render() {

    const { statement, general, skills, experience, education, additional } = this.state

    return (
      <div>
        <Header />

        <General info={general} />
        <Statement info={statement} />
        <Skills info={skills} />
        <Experience info={experience} />
        <Education info={education} />
        <Additional info={additional} />
      </div>
    )
  }
}

export default App;
