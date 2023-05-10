


// import xpathselector from "../../support/xpath_selector";

describe('luvicon',()=>{
    

    it('should navigate to the site', () => {
        cy.visit('https://homluv.com/')
        // cy.wait(2000)
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        

      })
      it('login',()=>{
        
        cy.xpath('//*[@class="luv-count sign-in-text"]').click()
        
        cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[1]/input').type('sasingh@gmail.com')
        cy.xpath('//*[@id="signInModal"]/div/div/div/form/div[2]/input').type('Saurabh@9211')
        cy.xpath('//*[@id="signInModal"]/div/div/div/form/button[1]').click()
      })
    
       
      it('select from location list',()=>{

       
        cy.xpath('//input[@placeholder="Search by city name or zip code"]').type('los')
        cy.wait(2000)
        cy.xpath('//*[@class="item ng-star-inserted"]//a').contains('Jose').click()
        cy.get('#locationSearchBtn').click();
      })
    //   it('like 1 images', () => {
    //     cy.wait(2000);
    //     cy.xpath('//*[@class="luv-icon ng-star-inserted"]').eq(0).click()
    //     cy.xpath('//*[@class="gallery-figure"]').eq(0).click()
    //     cy.wait(5000)
    //     cy.xpath('//*[@id="search-result-list"]/div/div[3]/hml-home-quickview/div/hml-quickview-home-banner/div[1]/hml-load-heart-icon/div/div[1]/hml-svg')
    //   //   .click()
    //     // .invoke('attr', 'href')
    //     .contains( 'https://crcdn01.adnxs-simple.com/creative/p/3232/2022/12/31/42420976/024e536d-fcd3-45ff-8687-2ecd0cf6f398.jpg');
  
        
    //   })
    //   it('mytest',()=>{
    //     cy.xpath('//*[@class="gallery-fig-img  ng-star-inserted ng-lazyloaded"]').eq(1).then(($img1) => {
    //         cy.log($img1)
    //         cy.xpath('//*[@class="board ng-star-inserted"]').click()
    //         cy.wait(10000)
    //         cy.xpath('//*[@class="gallery-fig-img  ng-lazyloaded"]').then(($img2) => {
    //           expect($img1.should('have.attr', 'alt','Kitchen featured in The TownFlats- Plan 4 By SummerHill Homes in San Jose, CA')).to.equal($img2.should('have.attr', 'alt','Kitchen featured in The TownFlats- Plan 4 By SummerHill Homes in San Jose, CA'));
    //         })
    //       })
    //   })
    // it('mytest',()=>{
    //     cy.xpath('//*[@class="gallery-fig-img  ng-star-inserted ng-lazyloaded"]').eq(1).should('have.attr', 'alt','Kitchen featured in The TownFlats- Plan 4 By SummerHill Homes in San Jose, CA')
    //   })
    // it('mytest',()=>{
    //    let exploreimage= cy.xpath('//*[@class="gallery-fig-img  ng-star-inserted ng-lazyloaded"]').eq(1).should('have.attr', 'alt')
    //    cy.log(exploreimage)
    //    cy.xpath('//*[@class="board ng-star-inserted"]').click()
    //    cy.wait(10000)
    //    let boarddeatilsimage= cy.xpath('//*[@class="gallery-fig-img ng-lazyloaded"]').should('have.att','alt')
       
    //    cy.log(boarddeatilsimage)
        
    //   })
    // it('mytest',()=>{
    //     cy.wait(2000)
    //    cy.xpath('//*[@class="gallery-fig-img  ng-star-inserted ng-lazyloaded"]').eq(1).should('have.attr', 'srcset','https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=850&maxheight=600&format=jpg 1600w ,https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=750&maxheight=500&format=jpg 1400w ,https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=500&maxheight=350&format=jpg 1100w ,https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=370&maxheight=250&format=jpg 500w')

    //    cy.xpath('//*[@class="board-badge"]').click()

    //    cy.xpath('//*[@class="gallery-fig-img  ng-lazyloaded"]').eq(0).should('have.attr','srcset','https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=850&maxheight=600&format=jpg 1600w ,https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=750&maxheight=500&format=jpg 1400w ,https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=500&maxheight=350&format=jpg 1100w ,https://nhs-dynamic.secure.footprint.net/Images/Homes/Summe43409/64125369-221214.jpg?progressive=true&maxwidth=370&maxheight=250&format=jpg 500w')
       
        
    //   })

        

      
})