// https://docs.cypress.io/api/commands/task

describe('cy.task("examples")', () => {
  it('runs a helloWorld task', () => {
    cy.task('helloWorld').then(result => {
      expect(result).to.equal('Hello world!')
    })
  })

  it('reads a fixture through a task', () => {
    cy.task('readExampleFixture').then(data => {
      expect(typeof(data)).to.equal('object')
      expect(data).deep.equal(
        {
          "name": "Using fixtures to represent data",
          "email": "hello@cypress.io",
          "body": "Fixtures are a great way to mock data for responses to routes"
        }        
      )
      expect(data.email).to.equal('hello@cypress.io')
    })
  })

  it('runs a task that generates a number between 1 and 10', () => {
    cy.task('generateRandomNumberBewteenOneAndTen').then(result => {
      expect(result).to.be.a('number')
      expect(result).to.be.within(1, 10)
    })
  })

  it('runs a greeting task that receives a string as argument', () => {
    cy.task('greeting', 'Walmyr').then(result => {
      expect(result).to.equal('Hello Walmyr! How are you doing today?')
    })
  })

  it('runs a task that receives an object as argument', () => {
    cy.task('getMyObjectWith', {
      name: 'Walmyr',
      age: 39,
      sex: 'M'
    }).then(result => {
      expect(result).deep.equal(
        {
          name: 'Walmyr',
          age: 39,
          sex: 'M'
        }
      )
    })
  })

  it('runs a task that returns a uuid using faker', () => {
    cy.task('generateUuidUsingFaker').then(result => {
      console.log(result)
    })
  })

  it('runs a task that returns a modified uuid', () => {
    cy.task('generate_/\_modified_/\_uuid').then(result => {
      console.log(result)
    })
  })

  it('runs a task without logging it to the commnad log', () => {
    cy.task('helloWorld', null, { log: false })
  })

  it('runs a task changing the command timeout', () => {
    cy.task('helloWorld', null, { timeout: 10000 })
  })

  it('runs a task without logging it to the commnad log, and changing the command timout', () => {
    cy.task('helloWorld', null, {
      log: false,
      timeout: 2000
    })
  })

  it('runs a task that does some stuff', () => {
    cy.task('doStuff').then(stuff => {
      console.log(stuff)
    })
  })
})