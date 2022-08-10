/**
 * Thêm Sinh Viên
 * _ Lấy thông tin từ form
 * _ Lưu thông tin sinh viên để tạo đối tương sv
 * _ Thêm sv vào mảng SV
 * _ Hiển thị danh sách sinh viên lên table
 */
//Global (toàn cục)
const dssv = new DanhSachSinhVien();
const validation = new Validation()



//Hàm rút gọn cú pháp getElementById
function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    // localStorage: object có sẵn của js, giúp sử dụng các phương thức của local storage
    // setItem(key, value)
    //key: tên local storage
    //value: giá trị cần lưu (mảng sinh viên)
    // localStorage : lưu dạng dữ liệu JSON (nếu lưu dạng mảng )
    //stringify : chuyển từ mảng sang JSON
    //JSON: đối tượng có sẵn của JS
    //BE cung cấp cho FE dữ liệu dạng JSON (dạng có hình dạng giống mảng đối tượng)
    //XML (ít dùng)
    localStorage.setItem("DSSV", JSON.stringify(dssv.mangSV));

}

function getLocalStorage() {
    // var valueStorage =localStorage.getItem("DSSV");
    // console.log(valueStorage);
    //! valueStorage.map is not a function => value không phải là mảng
    // valueStorage.map(function(item){
    //     console.log(item);
    // })

    // localStorage, session, cookie: lưu data không cần lưu trữ xuống BE, dữ liệu không bảo mật => tăng performance
    //! dssv.mangSV is null => vì không có local storage
    // dssv.mangSV.map(function(item){
    //     console.log(item);
    // })

    if (localStorage.getItem("DSSV") != null) {
        //lấy được localStorage
        dssv.mangSV = JSON.parse(localStorage.getItem("DSSV"));
        hienThiTable(dssv.mangSV);
    }


}


//Lây danh sách sv từ local khi load trang web
getLocalStorage();



function themSinhVien() {
    //lấy thông tin 
    var ma = getELE("txtMaSV").value.trim();
    var ten = getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var matKhau = getELE("txtPass").value;
    var ngay = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var toan = getELE("txtDiemToan").value;
    var ly = getELE("txtDiemLy").value;
    var hoa = getELE("txtDiemHoa").value;
    // console.log(ma,ten,email,matKhau,ngay,khoaHoc,toan,ly,hoa);

    //Kết quả kiểm tra dữ liệu
    var isValid = true;

    //Các bước kiểm tra dữ liệu
    //?kiem tra maSV
    //!false
    // bolean true &&(AND) true => true
    //& => BIT  true => 1, false => 0
    // 1 & 1 => 1 
    isValid &=  validation.kiemTraRong(ma,"spanMaSV","Mã sinh viên không được để trống!") && validation.kiemTraTrung(ma,"spanMaSV","Mã sinh viên không được trùng",dssv.mangSV) ;

    //true
    //?kiem tra tenSV
    // isValid (ten) = isValid (ma) & kiemTraRong(ten)
    isValid &= validation.kiemTraRong(ten,"spanTenSV","Tên sinh viên không được để trống") && validation.kiemTraTen(ten,"spanTenSV","Tên sinh viên phải là chữ");

    //?kiem tra email
    isValid &= validation.kiemTraEmail(email,"spanEmailSV","Email không đúng định dạng");

     //?kiem tra pass
     isValid &= validation.kiemTraPass(matKhau,"spanMatKhau","Mật khẩu phải có ít nhất 1 ký tự chữ, 1 in hoa, 1 số,1 đặc biêt, và từ 6-8 chữ");

    //? kiem tra khóa học
    isValid &= validation.kiemTraKH("khSV","spanKhoaHoc","Khóa học chưa được chọn");

      //? kiem tra diểm
      isValid &= validation.kiemTraDiem(toan,"spanToan","Điểm chưa hợp lệ");

      isValid &= validation.kiemTraDiem(ly,"spanLy","Điểm chưa hợp lệ");

      isValid &= validation.kiemTraDiem(hoa,"spanHoa","Điểm chưa hợp lệ");

    // isValid == true
    if(isValid) {
        //Tất cả các dữ liệu đều hợp lệ
        //Tạo thể hiện của lớp SinhVien
        var sv = new SinhVien(ma, ten, email, matKhau, ngay, khoaHoc, Number(toan), Number(ly), Number(hoa));
        sv.tinhDTB();
        // console.log(sv);

        //thêm sinh viên vào mảng
        dssv.themSV(sv);
        //Lưu trữ local storage
        setLocalStorage();
        //lấy dữ liệu từ localstorage
        getLocalStorage();

        // hienThiTable();
    }


}

function hienThiTable(mang) {
    //chứa nhiều thẻ tr
    //1 tr là 1 sinh viên
    var content = "";

    // map(): hàm giúp duyệt mảng
    // myFunction1(myFunction2());
    //map(function(1 phần tử của mảng,vị trí của phần tử))
    mang.map(function (sv, index) {
        // ``: string template
        //ES5: "<td>"+sv.maSV+"</td> <td>"+
        // content += `<tr></tr>`
        var trELE = `<tr>
            <td>${sv.maSV}</td>
            <td>${sv.tenSV}</td>
            <td>${sv.email}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.khoaHoc}</td>
            <td>${sv.dtb}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')" >Xóa</button>
                <button onclick="hienThiChiTiet('${sv.maSV}')"  class="btn btn-info" >Xem</button>
            </td>
        </tr>`
        // "tr1" + "tr2" + "tr3"
        content += trELE;
    });
    getELE("tbodySinhVien").innerHTML = content;
}
function xoaSinhVien(id) {
    console.log(id);
    dssv.xoaSV(id);


    //Lưu trữ local storage
    setLocalStorage();
    //lấy dữ liệu từ localstorage
    getLocalStorage();

    // //khi mảng SV thay đổi phải hiển thị lại table để người dùng thấy được thay đổi
    // hienThiTable();
}

function hienThiChiTiet(id) {
    // mã => index (vị trí)
    console.log(id);
    var viTri = dssv.timViTri(id);
    if (viTri > -1) {
        //tìm thấy
        getELE("txtMaSV").value = dssv.mangSV[viTri].maSV;
        getELE("txtMaSV").disabled = true;

        getELE("txtTenSV").value = dssv.mangSV[viTri].tenSV;
        getELE("txtEmail").value = dssv.mangSV[viTri].email;
        getELE("txtPass").value = dssv.mangSV[viTri].matKhau;
        getELE("txtPass").type = "text";
        getELE("txtNgaySinh").value = dssv.mangSV[viTri].ngaySinh;
        getELE("khSV").value = dssv.mangSV[viTri].khoaHoc;
        getELE("txtDiemToan").value = dssv.mangSV[viTri].diemToan;
        getELE("txtDiemLy").value = dssv.mangSV[viTri].diemLy;
        getELE("txtDiemHoa").value = dssv.mangSV[viTri].diemHoa;
    }
}


function capNhatSinhVien() {
    //lấy thông tin 
    var ma = getELE("txtMaSV").value;
    var ten = getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var matKhau = getELE("txtPass").value;
    var ngay = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var toan = Number(getELE("txtDiemToan").value);
    var ly = Number(getELE("txtDiemLy").value);
    var hoa = Number(getELE("txtDiemHoa").value);

    var sv = new SinhVien(ma, ten, email, matKhau, ngay, khoaHoc, toan, ly, hoa);
    sv.tinhDTB();

    dssv.capNhat(sv);

    //khi thay đổi mảng thì gọi lưu local storage
    //Sau khi lưu thì lấy dữ liệu để hiển thị UI
    setLocalStorage();
    getLocalStorage();


}


getELE("btnSearch").onclick = function(){
    var tenTK = getELE("txtSearch").value;
    var mangTK = [];

    mangTK = dssv.timKiemTen(tenTK);
    hienThiTable(mangTK);


}

