describe('Iniciar seccion de usuario en la plataforma de recibos', () =>{

beforeEach("Usuario se situa en la plataforma de recibos",()=>{

cy.visit("https://recibos3.banksa.com.ar/develop/#/")

cy.location("protocol").should("contains","https")
cy.url().should("contains","develop")
cy.url().should("eq","https://recibos3.banksa.com.ar/develop/#/")

})

it("Usuario inicia seccion ",()=>{
    
cy.fixture("DOM/banksa.Page").then((the) =>{

    cy.get(the.input.inputname).type(the.data.username)


cy.get(the.input.inputpassword).type(the.data.password)

cy.get("[type='submit']")
.should("have.text","Ingresar").click()
})



})

})