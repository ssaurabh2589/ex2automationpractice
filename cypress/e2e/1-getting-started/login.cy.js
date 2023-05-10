/// <reference types='cypress'/>






describe('compare data from json', ()=>{
    let mydata;
    before(()=>{
        cy.fixture('mydata.json').then((data)=>{
            mydata=data
        })
    })


    it('should navigate to the site', () => {
        cy.visit('https://homluv.com/')
      })

      it('click on homepage search field',()=>{

        cy.xpath(xpathselector.Homepageheadersearch).type('los')
        cy.get(':nth-child(2) > div > a').click();
        cy.get('#locationSearchBtn').click();
        
       
       

      })
      it('left nav bar',()=>{
        
        cy.xpath('//span[text() = "Set Bed"]').click()
        cy.xpath('//*[@id="search-result-list"]/div/div[1]/hml-quiz-wrapper/div/div/hml-preferences-quiz/div/hml-preferences-quiz-form/div/span').click()
        
      })
      it('like 5 images', () => {
        cy.wait(10000);
        cy.xpath('//*[@class="luv-icon"]//*[name()="svg"]')
  .each((el, index) => {
    if (index < 5) {
      cy.wrap(el).click()
    }
  })
      })
      
      it('login',()=>{
        cy.wait(5000)
        cy.xpath('//*[@id="onBoardSaveProgress"]/div[3]/span[2]').click()
        cy.xpath('//*[@id="signUpModal"]/div/div/form/div[5]/p/a').click()
        cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[1]/input').type('sasingh@gmail.com')
        cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[2]/input').type('Saurabh@9211')
        cy.xpath('//*[@id="signInModal"]/div/div/div/form/button[1]').click()
      })
      it('validate account',()=>{
        cy.xpath('/html/body/hml-root/div[2]/hml-header/header/div/ul/li[5]/a/img').click()
        cy.xpath('/html/body/hml-root/div[2]/hml-luvlingo/div/div/hml-style-header/div/div[2]/h2/span[1]').should('have.text','Saurabh singh')
      })


   
});