import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
    before(() =>{
      cy.visit('https://www.demoblaze.com/');
    })
    Given("the given thing",()=>{
      cy.get('a[id="items"]').contains('Laptops').click()
    })

    When("it does this",()=>{
      cy.get('a[class="hrefch"]').contains('MacBook air').click()
    })

    Then("do this",()=>{
      cy.get('a').contains('Add to cart',{timeout:5000}).click()
      cy.get('a').contains('Home').click()
    })
  
  