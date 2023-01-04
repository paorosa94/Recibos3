describe("esto es una prueba en youtube",()=>{


    beforeEach("se situa en la plataforma de youtube",()=>{

        cy.visit("")
        cy.get('[type="text"]').type("youtube")
    })

})