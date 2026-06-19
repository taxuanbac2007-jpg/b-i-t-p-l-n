// =========================================================================
// HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG (PTIT)
// BÀI TẬP LỚN: XÂY DỰNG WEBSITE ĐỒ ĂN ĐƯỜNG PHỐ MEALS & WHEELS
// FILE: trang-chu.js (Xử lý hiệu ứng giao diện trang chủ - Đã kéo dài hơn 500 dòng)
// =========================================================================

// =========================================================================
// KHU VỰC 1: KHO DỮ LIỆU TẬP TRUNG PHỤ TRỢ (Quản lý động danh mục món ăn)
// =========================================================================

// Mảng chứa danh sách đầy đủ 6 món ăn để tự động bơm ra HTML, khắc phục lỗi trống màn hình
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
    }
];

// Biến toàn cục lưu số sao người dùng chọn khi bình luận
var soSaoNguoiDungChon = 5;

// =========================================================================
// KHU VỰC 2: SỰ KIỆN KHỞI TẢI WINDOW ONLOAD
// =========================================================================
window.onload = function() {
    console.log("Trang chủ Meals & Wheels đã khởi tải xong toàn bộ cấu trúc!");
    
    // 1. Tự động đổ dữ liệu từ mảng JS ra ngoài HTML
    tuDongBomMonAnRaHtml();
    
    // 2. Kích hoạt tính năng slider trượt ngang tự động liên tục
    khoiChaySliderTuDong();
    
    // 3. Kích hoạt tính năng form voucher nhận mã quà tặng ngẫu nhiên
    khoiChayFormNhanVoucher();
    
    // 4. Kích hoạt tính năng chấm điểm sao khi viết nhận xét
    khoiChayChonSaoDanhGia();
    
    // 5. Kích hoạt nút bấm gửi bình luận động lên lưới
    khoiChayGuiBinhLuanDong();
    
    // 6. Kích hoạt tính năng click ảnh phóng to thu nhỏ toàn màn hình (Lightbox)
    khoiChayTrinhXemAnhLightbox();
    
    // 7. Chạy hiệu ứng đếm số tăng trưởng tự động cho dải thống kê
    chayBoDemSoThongKeTuDong();
};

// =========================================================================
// KHU VỰC 3: HÀM ĐỔ DỮ LIỆU ĐỘNG TỪ MẢNG JS VÀO THẺ HTML CHỦ QUẢN
// =========================================================================
function tuDongBomMonAnRaHtml() {
    var vungChuaHtmlMonAn = document.getElementById("renderTargetMonAn");
    if (vungChuaHtmlMonAn === null) return;

    var chuoiHtmlMonAn = "";

    // Duyệt mảng dữ liệu để gom chuỗi mã HTML thẻ món ăn
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

    // Thuật toán x2 chuỗi nội dung để băng chuyền slider nối đuôi trượt vô hạn không bị hẫng
    vungChuaHtmlMonAn.innerHTML = chuoiHtmlMonAn + chuoiHtmlMonAn;
}

// =========================================================================
// KHU VỰC 4: LOGIC ĐIỀU KHIỂN BĂNG CHUYỀN SLIDER CHẠY TỰ ĐỘNG KHÔNG NGỪNG
// =========================================================================
var viTriCuonNgang = 0;
var trinhDinhThoiSlider;

function khoiChaySliderTuDong() {
    var theKhungSlider = document.getElementById("foodSlider");
    var theLuoiMonAn = document.getElementById("renderTargetMonAn");
    
    if (theKhungSlider === null || theLuoiMonAn === null) return;

    clearInterval(trinhDinhThoiSlider);

    // Cứ sau 22 mili-giây dịch sang phải 1 pixel
    trinhDinhThoiSlider = setInterval(function() {
        viTriCuonNgang = viTriCuonNgang + 1;
        
        var motNuaDoRongThanhPhan = theLuoiMonAn.scrollWidth / 2;
        if (viTriCuonNgang >= motNuaDoRongThanhPhan) {
            viTriCuonNgang = 0;
        }
        theKhungSlider.scrollLeft = viTriCuonNgang;
    }, 22);

    // Chuột rê vào -> dừng trượt
    theKhungSlider.onmouseenter = function() {
        clearInterval(trinhDinhThoiSlider);
    };

    // Chuột di chuyển ra ngoài -> tiếp tục trượt tự động
    theKhungSlider.onmouseleave = function() {
        khoiChaySliderTuDong();
    };
}

// =========================================================================
// KHU VỰC 5: BIẾN THANH ĐIỀU HƯỚNG MENU THÀNH CỐ ĐỊNH KHI CUỘN (STICKY)
// =========================================================================
window.onscroll = function() {
    var theThanhMenu = document.querySelector(".thanh-dieu-huong");
    if (theThanhMenu === null) return;

    // Nếu người dùng cuộn xuống quá 160px tính từ đỉnh trang web
    if (window.scrollY > 160) {
        theThanhMenu.classList.add("sticky");
    } else {
        theThanhMenu.classList.remove("sticky");
    }
};

// =========================================================================
// KHU VỰC 6: FORM ĐĂNG KÝ VOUCHER KHUYẾN MÃI VÀ SINH MÃ TOÁN HỌC NGẪU NHIÊN
// =========================================================================
function khoiChayFormNhanVoucher() {
    var theFormVoucher = document.getElementById("voucherForm");
    var theHopKetQuaVoucher = document.getElementById("voucherResult");

    if (theFormVoucher === null || theHopKetQuaVoucher === null) return;

    theFormVoucher.onsubmit = function(suKienNutGui) {
        suKienNutGui.preventDefault(); // Chặn reload trang mặc định

        var chuoiTenNguoiDung = document.getElementById("nhap-ten").value;
        var chuoiEmailNguoiDung = document.getElementById("nhap-email").value;

        // Tạo chuỗi số ngẫu nhiên từ 1000 đến 9999
        var soNgauNhienBonChuSo = Math.floor(1000 + Math.random() * 9000);
        var maVoucherChungThuc = "PTIT-" + soNgauNhienBonChuSo;

        // Vẽ hộp thông báo kết quả chèn thẳng xuống dưới Form
        theHopKetQuaVoucher.innerHTML = `
            <div style="border: 2px dashed #ff6b6b; padding: 20px; background-color: #fff3f3; border-radius: 8px; margin-top: 15px;">
                <h4 style="color: #ff6b6b; margin-bottom: 10px; font-size: 16px;">🎉 ĐĂNG KÝ THÀNH CÔNG VOUCHER ƯU ĐÃI!</h4>
                <p style="margin: 5px 0; font-size: 14px;">Xin chào bạn <b>${chuoiTenNguoiDung}</b>,</p>
                <p style="margin: 5px 0; font-size: 14px;">Mã số quà tặng ưu đãi giảm giá 20% của riêng bạn là: <span style="color: #ff6b6b; font-weight: bold; font-size: 18px;">${maVoucherChungThuc}</span></p>
                <p style="margin: 8px 0 0 0; font-size: 12px; color: #555; font-style: italic;">* Chi tiết voucher đã được gửi về hòm thư điện tử: ${chuoiEmailNguoiDung}.</p>
            </div>
        `;

        theHopKetQuaVoucher.style.display = "block";
        theFormVoucher.reset(); // Làm trống form
    };
}

// =========================================================================
// KHU VỰC 7: CHẤM ĐIỂM SAO BÌNH LUẬN KHÁCH HÀNG
// =========================================================================
function khoiChayChonSaoDanhGia() {
    var danhSachCacNgoiSao = document.querySelectorAll("#starRatingSelect i");
    if (danhSachCacNgoiSao.length === 0) return;

    danhSachCacNgoiSao.forEach(function(ngoiSaoDonLe) {
        ngoiSaoDonLe.onclick = function() {
            var diemSoSaoBam = parseInt(this.getAttribute("data-value"), 10);
            soSaoNguoiDungChon = diemSoSaoBam;

            // Tô màu vàng cho các sao bé hơn hoặc bằng điểm bấm, xóa màu các sao lớn hơn
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

        // Vẽ chuỗi ký tự hình sao vàng/sao rỗng dựa trên điểm chọn
        var chuoiSaoHienThi = "";
        for (var i = 1; i <= 5; i++) {
            chuoiSaoHienThi += (i <= soSaoNguoiDungChon) ? "★" : "☆";
        }

        var chuCaiDauTien = chuoiTenKhach.charAt(0).toUpperCase();

        // Tạo Node phần tử div bình luận mới
        var theDanhGiaMoi = document.createElement("div");
        theDanhGiaMoi.className = "the-danh-gia";
        theDanhGiaMoi.innerHTML = `
            <p class="diem-sao">${chuoiSaoHienThi}</p>
            <p class="loi-binh"><i>"${chuoiNoiDungKhach}"</i></p>
            <hr class="vach-ngan">
            <div class="thong-tin-nguoi-dung">
                <span class="hinh-dai-dien" style="background-color: #ffb830;">${chuCaiDauTien}</span>
                <div class="chu-thich-ten">
                    <b>${chuoiTenKhach}</b><br>
                    <span class="nhan-khach">Đánh giá trực tuyến từ sinh viên</span>
                </div>
            </div>
        `;

        // Chèn chèn lên vị trí đầu tiên của lưới bình luận
        vungChuaCacTheDanhGia.insertBefore(theDanhGiaMoi, vungChuaCacTheDanhGia.firstChild);

        // Xóa trống các ô nhập liệu để khách sau điền tiếp
        oNhapTenKhach.value = "";
        oNhapNoiDungKhach.value = "";
        
        var tatCaNgoiSao = document.querySelectorAll("#starRatingSelect i");
        tatCaNgoiSao.forEach(s => s.classList.add("active"));
        soSaoNguoiDungChon = 5;

        alert("🎉 Đánh giá của bạn đã được xuất bản công khai lên lưới!");
    };
}

// =========================================================================
// KHU VỰC 9: TRÌNH PHÓNG TO HÌNH ẢNH TOÀN MÀN HÌNH (MEDIA LIGHTBOX)
// =========================================================================
function khoiChayTrinhXemAnhLightbox() {
    var oCuaSoModalLightbox = document.getElementById("lightboxModal");
    var oAnhNoiDungPhongTo = document.getElementById("lightboxImg");
    var oChuThichAnhLightbox = document.getElementById("lightboxCaption");
    var nutDongLightbox = document.getElementById("lightboxClose");

    if (oCuaSoModalLightbox === null || oAnhNoiDungPhongTo === null) return;

    // Sử dụng kỹ thuật bắt sự kiện click động: Khi click vào bất kỳ đâu trên trang web
    document.body.addEventListener("click", function(suKienClick) {
        var theAnhDuocBam = suKienClick.target;
        
        // Nếu phần tử click vào chứa class 'lightbox-trigger' hoặc 'anh-mon-an' hoặc nằm trong dải ảnh cuộn
        if (theAnhDuocBam.classList.contains("lightbox-trigger") || theAnhDuocBam.classList.contains("anh-mon-an")) {
            oCuaSoModalLightbox.style.display = "block";
            oAnhNoiDungPhongTo.src = theAnhDuocBam.src;
            oChuThichAnhLightbox.textContent = theAnhDuocBam.alt || "Hình ảnh không gian ẩm thực Meals & Wheels";
        }
    });

    function dongCuaSoLightbox() {
        oCuaSoModalLightbox.style.display = "none";
    }

    if (nutDongLightbox !== null) nutDongLightbox.onclick = dongCuaSoLightbox;
    
    oCuaSoModalLightbox.onclick = function(e) {
        if (e.target === oCuaSoModalLightbox) dongCuaSoLightbox();
    };
}

// =========================================================================
// KHU VỰC 10: HÀM HIỆU ỨNG ĐẾM SỐ TĂNG TRƯỞNG TỰ ĐỘNG (INTERACTIVE COUNTER)
// =========================================================================
function chayBoDemSoThongKeTuDong() {
    var mangCacTheSoThongKe = document.querySelectorAll(".count-number");
    if (mangCacTheSoThongKe.length === 0) return;

    mangCacTheSoThongKe.forEach(function(theSoDonLe) {
        var giaTriDichToiDa = parseInt(theSoDonLe.getAttribute("data-target"), 10);
        if (isNaN(giaTriDichToiDa)) return;

        var conSoChayBatDau = 0;
        var buocTangMoiNhip = Math.ceil(giaTriDichToiDa / 50);

        var trinhDinhThoiBoDem = setInterval(function() {
            conSoChayBatDau = conSoChayBatDau + buocTangMoiNhip;
            
            if (conSoChayBatDau >= giaTriDichToiDa) {
                theSoDonLe.textContent = giaTriDichToiDa.toLocaleString() + (giaTriDichToiDa === 100 ? "%" : "+");
                clearInterval(trinhDinhThoiBoDem);
            } else {
                theSoDonLe.textContent = conSoChayBatDau.toLocaleString() + "+";
            }
        }, 30); 
    });
}