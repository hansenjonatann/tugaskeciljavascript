const saldoAkhir = prompt('masukkan saldo akhir anda')
alert(`saldo akhir anda adalah Rp. ${saldoAkhir}`)



const hari = new Date().getDay()


switch(hari) {
    case 1:
    alert(`Hari ini adalah hari Senin`)
    break
    case 2:
    alert(`Hari ini adalah hari Selasa`)
    break
    case 3:
    alert(`Hari ini adalah hari Rabu`)
    break
    case 4:
    alert(`Hari ini adalah hari Kamis`)
    break
    case 5: 
    alert(`Hari ini adalah hari Jumat`)
    break
    case 6:
    alert(`Hari ini adalah hari Sabtu`)
    break
    case 7:
    alert(`Hari ini adalah hari Minggu`)
    break
    default:
    alert('Hari')
    break
}