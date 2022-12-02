describe('KitaBisa', function(){
    it('DonationFlow', function(){
        //Visit Kitabisa Website
        cy.visit({url: 'https://kitabisa.com/', failOnStatusCode: false})
        //Masuk ke halaman Donasi
        cy.get('[class=w-full p-[10%]]').click()
        cy.url().should('eq','https://kitabisa.com/explore/all')
        //Pilih Salah Satu Campaign
        cy.contains('Tolong Ko Fuk Phin Lawan Kanker Stadium Akhir!').click()
        cy.url().should('eq','https://kitabisa.com/campaign/bantupapalawankankerparu')
        //Step by Step Donasi
        cy.get('button[id=campaign-detail_button_donasi-sekarang]').click()
        cy.get('input[name=amount]').type('10000')
        cy.get('button[id=contribute_button_lanjutkan-pembayaran]').click()
        cy.get('Transfer BCA').click()
        cy.get('input[id=fullname]').type('Kornelius')
        cy.get('input[id=username]').type('korneliussung00@gmail.com')
        cy.get('button[id=contribute_button_lanjutkan-pembayaran]').click()
        cy.contains('Cek status pembayaran').click()
        //Kembali ke Campaign lalu back
        cy.get('button[class=rounded px-6 py-1 text-white]').click()
        cy.url().should('eq','https://kitabisa.com/campaign/bantupapalawankankerparu')
        cy.get('aria-label=header back button').click()
        cy.url().should('eq','https://kitabisa.com/')
       })
})