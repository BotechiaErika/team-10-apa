let controller = {
    index: (req, res) => {
        res.render('staff/employersRead', { title: 'STAFF' })
    },
    staff01: (req, res) => {
        res.render('staff/staff_05', { title: 'STAFF' })
    },
    staff02: (req, res) => {
        res.render('staff/staff_01', { title: 'STAFF' })
    }
}

module.exports = controller