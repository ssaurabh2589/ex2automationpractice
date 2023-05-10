
import xpathselectorcommon from "../../support/xpath_selector_common"


describe('compare data from json', ()=>{
  let mydata;
  before(()=>{
      cy.fixture('mydata.json').then((data)=>{
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

     it('like 1 images', () => {
      cy.wait(2000);
      cy.xpath(xpathselectorcommon.exploreimagelist)
      .each((el, index) => {
      if (index<1) {
      cy.wrap(el).click().trigger('mouseover');
  }
     })
    })

    it('create board', () => {
      cy.wait(2000);
      cy.xpath(xpathselectorcommon.exploreimagedropdownlist).eq(0).click()
      cy.xpath(xpathselectorcommon.exploreimagedropdownlistcreateboard).click()
      cy.xpath(xpathselectorcommon.explorecreateboardmodalboardname).type('Testboard')
      cy.xpath(xpathselectorcommon.explorecreateboardmodalboardlocationinputfield).click().type('dall')
      cy.wait(2000)
      cy.xpath(xpathselectorcommon.explorecreateboardmodalselectlocationlist).contains('Dallas').click()
      cy.xpath(xpathselectorcommon.explorecreateboardmodalpricerangeslider).click().type(mydata.slidermovement)
      
    })
    it('verify the board name and data',()=>{

      cy.xpath(xpathselectorcommon.boardnameheader).click()
      cy.xpath(xpathselectorcommon.boarddetailsboardname).eq(0).should('have.text','rock')
      
    })
    it('Verify the liked image',()=>{

      cy.xpath('//*[@class="gallery-fig-img  ng-lazyloaded"]').eq(0).should('have.attr','srcset',mydata.srcdataof1stimageinboarddetils)
      
   

     cy.xpath('//*[@class="head-nav-item"]').eq(0).click()
     cy.wait(2000)

   

    cy.xpath('//*[@class="gallery-fig-img  ng-star-inserted ng-lazyloaded"]').eq(1).should('have.attr', 'srcset',mydata.srcdataof1stimageinboarddetils)
     
      
    })

  
  })
  // })