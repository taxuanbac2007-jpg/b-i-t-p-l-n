// =========================================================================
// KHU VỰC 1: KHO DỮ LIỆU TẬP TRUNG PHỤ TRỢ (Quản lý động danh mục món ăn)
// =========================================================================

var khoDuLieuMonAnTrangChu = [
    {
        maMon: "MON-001",
        tenMonAn: "Beef Burger Thượng Hạng",
        phanLoai: "BURGER",
        giaBan: 55000,
        duongDanAnh: "https://png.pngtree.com/background/20230413/original/pngtree-food-burger-delicious-tempting-background-picture-image_2423373.jpg",
        moTaNgan: "Thịt bò Mỹ 100%, phô mai cheddar tan chảy kết hợp sốt BBQ đặc chế."
    },
    {
        maMon: "MON-002",
        tenMonAn: "Tiramisu Truyền Thống",
        phanLoai: "TRÁNG MIỆNG",
        giaBan: 35000,
        duongDanAnh: "https://img.vietcetera.com/uploads/images/21-jun-2023/6.jpg",
        moTaNgan: "Cốt bánh mềm mịn, thấm đẫm rượu cà phê espresso và kem béo ngậy."
    },
    {
        maMon: "MON-003",
        tenMonAn: "Cà Phê Americano Đá",
        phanLoai: "ĐỒ UỐNG",
        giaBan: 25000,
        duongDanAnh: "https://tse4.mm.bing.net/th/id/OIP.srTsz6i-CseZNqsYEi9KtQHaE8?pid=Api&P=0&h=180",
        moTaNgan: "Hạt Arabica rang đậm đà, vị đắng thanh thoát mát lạnh tỉnh táo tức thì."
    },
    {
        maMon: "MON-004",
        tenMonAn: "Khoai Tây Lắc Phô Mai",
        phanLoai: "ĂN VẶT",
        giaBan: 30000,
        duongDanAnh: "https://tse3.mm.bing.net/th/id/OIP.ef0gcJpfVDltdCeRgcNH2QHaE8?pid=Api&P=0&h=180",
        moTaNgan: "Khoai tây chiên cọng dài giòn rụm bao phủ lớp bột phô mai mặn ngọt."
    },
    {
        maMon: "MON-005",
        tenMonAn: "Burger Gà Giòn Sốt Cay",
        phanLoai: "BURGER",
        giaBan: 49000,
        duongDanAnh: "https://media.istockphoto.com/id/1410844723/vi/anh/b%C3%A1nh-m%C3%AC-k%E1%BA%B9p-ph%C3%B4-mai-ngon-ng%E1%BB%8Dt-%C4%83n-k%C3%A8m-v%E1%BB%9Bi-khoai-t%C3%A2y-chi%C3%AAn.jpg?s=612x612&w=0&k=20&c=zvg3SffX68_gZUD2eZTmed8knHaMVBBLmgAnrB2fsVI=",
        moTaNgan: "Ức gà chiên xù giòn tan cùng sốt Gochujang cay ngọt chuẩn vị Hàn."
    },
    {
        maMon: "MON-006",
        tenMonAn: "Xiên Nướng Meals & Wheels",
        phanLoai: "ĐỒ NƯỚNG",
        giaBan: 15000,
        duongDanAnh: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop",
        moTaNgan: "Thịt xiên nướng cháy cạnh thơm lừng đẫm sốt mật ong rừng."
    },
    {
        maMon: "MON-007",
        tenMonAn: "Trà Sữa Nướng Thạch Ô Long",
        phanLoai: "ĐỒ UỐNG",
        giaBan: 32000,
        duongDanAnh: "https://congthucphache.com/wp-content/uploads/2019/12/tra-sua-olong-1.jpg",
        moTaNgan: "Vị trà đậm đà quyện sốt nướng caramen thơm ngậy, kèm thạch giòn dai."
    },
    {
        maMon: "MON-008",
        tenMonAn: "Trà Đào Cam Sả Mát Lạnh",
        phanLoai: "ĐỒ UỐNG",
        giaBan: 28000,
        duongDanAnh: "https://img.meta.com.vn/Data/image/2021/05/20/tra-dao-cam-sa-2.jpg",
        moTaNgan: "Vị trà thanh ngọt quyện cùng hương sả nồng nàn, cam tươi và đào miếng giòn sần sật."
    },
    {
        maMon: "MON-009",
        tenMonAn: "Bánh Croissant Trứng Muối",
        phanLoai: "TRÁNG MIỆNG",
        giaBan: 25000,
        duongDanAnh: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
        moTaNgan: "Vỏ bánh ngàn lớp giòn rụm, bẻ đôi lớp nhân kim sa trứng muối chảy béo ngậy."
    },
    {
        maMon: "MON-010",
        tenMonAn: "Pudding Matcha Trân Châu",
        phanLoai: "TRÁNG MIỆNG",
        giaBan: 22000,
        duongDanAnh: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop",
        moTaNgan: "Pudding trà xanh mềm mịn như nhung, kết hợp trân châu đen ngọt bùi."
    },
    {
        maMon: "MON-011",
        tenMonAn: "Double Cheese Tôm Lớp",
        phanLoai: "BURGER",
        giaBan: 59000,
        duongDanAnh: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
        moTaNgan: "Nhân tôm biển băm bọc bột chiên xù giòn rụm, gấp đôi phô mai lát và sốt tartar thanh mát."
    },
    {
        maMon: "MON-012",
        tenMonAn: "Burger Heo Xông Khói BBQ",
        phanLoai: "BURGER",
        giaBan: 52000,
        duongDanAnh: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop",
        moTaNgan: "Thịt heo nướng giòn quyện cùng dải thịt ba rọi xông khói áp chảo thơm lừng và hành tây vòng."
    }
];

var soSaoNguoiDungChon = 5;

// =========================================================================
// KHU VỰC 2: SỰ KIỆN KHỞI TẢI 
// =========================================================================
window.onload = function() {
    
    tuDongBomMonAnRaHtml();
    
    khoiChaySliderTuDong();
    
    khoiChayFormNhanVoucher();
    
    khoiChayChonSaoDanhGia();
    
    khoiChayGuiBinhLuanDong();
    
};

// =========================================================================
// KHU VỰC 3: HÀM ĐỔ DỮ LIỆU ĐỘNG 
// =========================================================================
function tuDongBomMonAnRaHtml() {
    var vungChuaHtmlMonAn = document.getElementById("renderTargetMonAn");
        var chuoiHtmlMonAn = "";

    khoDuLieuMonAnTrangChu.forEach(function(mon) {
        chuoiHtmlMonAn += `
            <article class="the-mon-an">
                <img src="${mon.duongDanAnh}" alt="${mon.tenMonAn}" class="anh-mon-an lightbox-trigger">
                <p class="phan-loai-mon">${mon.phanLoai}</p>
                <h3 class="ten-mon-an">${mon.tenMonAn}</h3>
                <p class="mo-ta-ngan">${mon.moTaNgan}</p>
                <span class="gia-tien">${mon.giaBan.toLocaleString()}đ</span>
            </article>
        `;
    });

   vungChuaHtmlMonAn.innerHTML = chuoiHtmlMonAn + chuoiHtmlMonAn ; 
}

// =========================================================================
// KHU VỰC 4: LOGIC ĐIỀU KHIỂN BĂNG CHUYỀN SLIDER CHẠY TỰ ĐỘNG KHÔNG NGỪNG
// =========================================================================
var viTriCuonNgang = 0;
var trinhDinhThoiSlider;

function khoiChaySliderTuDong() {
    var theKhungSlider = document.getElementById("foodSlider");
    var theLuoiMonAn = document.getElementById("renderTargetMonAn");
  
    trinhDinhThoiSlider = setInterval(function() {
        viTriCuonNgang = viTriCuonNgang + 1;
        
        var motNuaDoRongThanhPhan = theLuoiMonAn.scrollWidth / 2;
        if (viTriCuonNgang >= motNuaDoRongThanhPhan) {
            viTriCuonNgang = 0;
        }
        theKhungSlider.scrollLeft = viTriCuonNgang;
    }, 22);


    theKhungSlider.onmouseenter = function() {
        clearInterval(trinhDinhThoiSlider);
    };

    theKhungSlider.onmouseleave = function() {
        khoiChaySliderTuDong();
    };
}

// =========================================================================
// KHU VỰC:5 FORM ĐĂNG KÝ VOUCHER KHUYẾN MÃI VÀ SINH MÃ NGẪU NHIÊN
// =========================================================================
function khoiChayFormNhanVoucher() {
    var theFormVoucher = document.getElementById("voucherForm");
    var theHopKetQuaVoucher = document.getElementById("voucherResult");

    if (theFormVoucher === null || theHopKetQuaVoucher === null) return;

    theFormVoucher.onsubmit = function(suKienNutGui) {
        suKienNutGui.preventDefault(); 

        var chuoiTenNguoiDung = document.getElementById("nhap-ten").value;
        var chuoiEmailNguoiDung = document.getElementById("nhap-email").value;

        var soNgauNhienBonChuSo = Math.floor(1000 + Math.random() * 9000);
        var maVoucherChungThuc = "PTIT-" + soNgauNhienBonChuSo;

        theHopKetQuaVoucher.innerHTML = `
            <div style="border: 2px dashed #ff6b6b; padding: 20px; background-color: #fff3f3; border-radius: 8px; margin-top: 15px;">
                <h4 style="color: #ff6b6b; margin-bottom: 10px; font-size: 16px;">🎉 ĐĂNG KÝ THÀNH CÔNG VOUCHER ƯU ĐÃI!</h4>
                <p style="margin: 5px 0; font-size: 14px;">Xin chào bạn <b>${chuoiTenNguoiDung}</b>,</p>
                <p style="margin: 5px 0; font-size: 14px;">Mã số quà tặng ưu đãi giảm giá 20% của riêng bạn là: <span style="color: #ff6b6b; font-weight: bold; font-size: 18px;">${maVoucherChungThuc}</span></p>
                <p style="margin: 8px 0 0 0; font-size: 12px; color: #555; font-style: italic;">* Chi tiết voucher đã được gửi về hòm thư điện tử: ${chuoiEmailNguoiDung}.</p>
            </div>
        `;
        theHopKetQuaVoucher.style.display = "block";
        theFormVoucher.reset(); 
    };
}

// =========================================================================
// KHU VỰC 7: CHẤM ĐIỂM SAO BÌNH LUẬN KHÁCH HÀNG
// =========================================================================
function khoiChayChonSaoDanhGia() {
    var danhSachCacNgoiSao = document.querySelectorAll("#starRatingSelect i");

    danhSachCacNgoiSao.forEach(function(ngoiSaoDonLe) {
        ngoiSaoDonLe.onclick = function() {
            var diemSoSaoBam = parseInt(this.getAttribute("data-value"), 10);
            soSaoNguoiDungChon = diemSoSaoBam;

            danhSachCacNgoiSao.forEach(function(saoKiemTra) {
                var giaTriCuaSaoKiemTra = parseInt(saoKiemTra.getAttribute("data-value"), 10);
                if (giaTriCuaSaoKiemTra <= diemSoSaoBam) {
                    saoKiemTra.classList.add("active");
                } else {
                    saoKiemTra.classList.remove("active");
                }
            });
        };
    });
}

// =========================================================================
// KHU VỰC 8: ĐẨY BÌNH LUẬN MỚI LÊN ĐẦU LƯỚI DANH SÁCH (LIVE FEEDBACK)
// =========================================================================
function khoiChayGuiBinhLuanDong() {
    var nutGuiBinhLuan = document.getElementById("btnSubmitReview");
    var vungChuaCacTheDanhGia = document.getElementById("containerDanhGia");

    if (nutGuiBinhLuan === null || vungChuaCacTheDanhGia === null) return;

    nutGuiBinhLuan.onclick = function() {
        var oNhapTenKhach = document.getElementById("reviewUser");
        var oNhapNoiDungKhach = document.getElementById("reviewContent");

        var chuoiTenKhach = oNhapTenKhach.value.trim();
        var chuoiNoiDungKhach = oNhapNoiDungKhach.value.trim();

        if (chuoiTenKhach === "" || chuoiNoiDungKhach === "") {
            alert("Bạn vui lòng nhập đầy đủ cả họ tên và nội dung đánh giá trước khi gửi nhé!");
            return;
        }

        var chuoiSaoHienThi = "";
        for (var i = 1; i <= 5; i++) {
            if (i <= soSaoNguoiDungChon) {
                chuoiSaoHienThi = chuoiSaoHienThi + "★";
            } else {
                    chuoiSaoHienThi = chuoiSaoHienThi + "☆";
            }
        }

        var chuCaiDauTien = chuoiTenKhach.charAt(0).toUpperCase();

        var theDanhGiaMoi = document.createElement("div");
        theDanhGiaMoi.className = "the-danh-gia";
        theDanhGiaMoi.innerHTML = `
            <p class="diem-sao">${chuoiSaoHienThi}</p>
            <p class="loi-binh"><i>"${chuoiNoiDungKhach}"</i></p>
            <hr class="vach-ngan">
            <div class="thong-tin-nguoi-dung">
                <span class="hinh-dai-dien" style="background-color: #9e0505;">${chuCaiDauTien}</span>
                <div class="chu-thich-ten">
                    <b>${chuoiTenKhach}</b><br>
                    <span class="nhan-khach">Đánh giá trực tuyến từ sinh viên</span>
                </div>
            </div>
        `;

        vungChuaCacTheDanhGia.insertBefore(theDanhGiaMoi, vungChuaCacTheDanhGia.firstChild);

        oNhapTenKhach.value = "";
        oNhapNoiDungKhach.value = "";
        
        var tatCaNgoiSao = document.querySelectorAll("#starRatingSelect i");
        tatCaNgoiSao.forEach(s => s.classList.remove("active")); 
        soSaoNguoiDungChon = 0; 

        alert("🎉 Đánh giá của bạn đã được xuất bản công khai lên lưới!");
    };
}
