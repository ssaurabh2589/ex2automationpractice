import xpathselectorcommon from "../../support/xpath_selector_common"

describe('compare data from json', ()=>{
  let mydata;
  before(()=>{
      cy.fixture('homepage.json').then((data)=>{
          mydata=data
      })
  });
  
  
    it('should navigate to the site', () => {
    
       cy.visit('https://homluv.com/')
       // cy.wait(2000)
       cy.clearAllCookies()
       cy.clearAllLocalStorage()
       

     })
     it('login',()=>{
      cy.wait(1000)
      
      cy.xpath(xpathselectorcommon.signinheaderbtn).click()
      
      cy.xpath(xpathselectorcommon.signinemail).type(mydata.email)
      cy.xpath(xpathselectorcommon.signinpassword).type(mydata.password)
      cy.xpath(xpathselectorcommon.signinmodalbtn).click()
    })
    it('select from location list',()=>{

       
      cy.xpath(xpathselectorcommon.locationmodalinputfield).type('los')
      cy.wait(2000)
      cy.xpath(xpathselectorcommon.locationdropdownlist).contains('Jose').click()
      cy.get(xpathselectorcommon.locationmodalbtn).click();
    })

    it('like unlike',()=>{
      cy.wait(2000)
      cy.xpath("//hml-svg[contains(@class, 'luv-icon')]").

        cy.xpath('//*[@class="gallery-figure"]').eq(1).click()
        cy.xpath('').should('have.attr','xlink:href', )
        
    })
   //

    })