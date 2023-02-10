const saldoAkhir = prompt('masukkan saldo akhir anda')
alert(`saldo akhir anda adalah Rp. ${saldoAkhir}`)

const hari = new Date().getDay()

switch(hari) {
    case 1:
    alert('Senin')
    break
    case 2:
    alert('Selasa')
    break
    case 3:
    alert('Rabu')
    break
    case 4:
    alert('Kamis')
    break
    case 5: 
    alert('Jumat')
    break
    case 6:
    alert('Sabtu')
    break
    case 7:
    alert('Minggu')
    break
    default:
    alert('Hari')
    break
}