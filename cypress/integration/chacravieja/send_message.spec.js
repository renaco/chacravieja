describe('send contact message', () => {

  it('should open device size', () => {
    cy.viewport(320, 568);
    cy.visit('http://localhost:8000/contacto');

    // cy.visit('http://localhost:3000/');
    // cy.get('#react-burger-menu-btn')
    //   .click()

    // cy.get('[href="/contacto"]')
    //   .click()

      // cy.get('[data-test=form]')
    // cy.get('[data-test=name]')
    //   .scrollTo('center');

    cy.get('[data-test=name]')
      .type('Emiliano Zapata Panuera')

    cy.get('[data-test=email]')
      .type('pagoefectivotest@gmail.com')

    cy.get('[data-test=subject]')
      .type('pruenba de contacto')

    cy.get('[data-test=message]')
      .type('Consectetur duis ad officia anim ullamco dolor. Voluptate esse ullamco sint reprehenderit qui velit quis laborum in est est officia. Dolore laboris do ipsum ad dolor do nulla incididunt proident incididunt.')

    cy.get('[data-test=send-contact]')
      .click()

  })
})