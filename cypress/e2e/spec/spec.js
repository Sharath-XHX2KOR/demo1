import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
    before(() =>{
      cy.visit('https://www.demoblaze.com/');
    })
    Given("the given thing has done",()=>{
      cy.get('a[id="itemc"]').contains('Laptops').click()
    })

    When("it does this thing",()=>{
      cy.get('a[class="hrefch"]').contains('MacBook air').click()
    })

    Then("do this then",()=>{
      cy.get('a').contains('Add to cart',{timeout:5000}).click()
      cy.get('a').contains('Home').click()
    })
  
  