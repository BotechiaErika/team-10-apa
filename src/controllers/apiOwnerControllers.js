const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const localesFilePath = path.join(__dirname, '../data/localAndRoomsDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const localsList = JSON.parse(fs.readFileSync(localesFilePath, 'utf-8'));
let controller = {
    dashAPA: (req, res) => {
        res.render('apiOwner/ownersHome', {
            title: 'owners apa'
        })
    },
    list: (req, res) => {
        res.render('apiOwner/showUsers', {
            title: 'Lista de Usuarios',
            usersList: usersList
        });
    },
    showUByID: (req, res) => {
        let register_user = req.params.register_user
        res.render('apiOwner/detailsUsers', {
            title: 'Detalles Usuario ' + register_user,
            usersList: usersList
        })
    },
    listLocals: (req, res) => {
        let rgL = req.params.rgL;
        res.render('apiOwner/showLocals', {
            title: 'listar Locales',
            localsList: localsList
        })
    },
    createLocal: (req, res) => {
        res.render('apiOwner/newEnterprise.ejs', { title: "FORM EMPRESA" })
    },
    storeLocal: (req, res) => {

        class CreateTeloo(nameHotel; emailHotel; telephoneHotel; webPageHotel; parkingHotel; comuna.value; apaAnchorH; startPointsL1; startPointsL2; startPointsL3) {
            this.nameHotel = req.body.nameHotel,
                this.emailHotel = req.body.emailHotel,
                this.telephoneHotel = req.body.telephoneHotel,
                this.webPageHotel = req.body.webPageHotel,
                this.addressHotel = req.body.addressHotel,
                this.parkingHotel = req.body.parkingHotel,
                this.comuna = req.body.comuna.value,
                this.apaAnchorH = req.body.apaAnchorH,
                this.startPointsL1 = req.body.startPointsL1,
                this.startPointsL2 = req.body.startPointsL2,
                this.startPointsL3 = req.body.startPointsL3
        }
    }

        let createTelo = new CreateTelo()
    console.log(CreateTelo)
    let newEJSON = JSON.stringify(fs.readFileSync(createTelo))
    app.get(newEJSON, (req, res) => {
        JSON.exports(__dirname, './../data/newEjson.json')
    })
}
module.exports = controller