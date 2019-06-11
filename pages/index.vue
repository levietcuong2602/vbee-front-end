<template>
  <div class="animated fadeIn p-2">
    <b-row>
      <div class="card-deck">
        <b-card class="card text-center" >
          <img class="card-img-top" src="~/static/img/tts.png" alt="Card image cap" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Vbee Cloud</h5>
            <p class="card-text">Chuyển văn bản thành giọng nói một cách hoàn toàn tự động</p>
            <div class="btn-group d-flex justify-content-between">
              <a href="#" class="btn btn-outline-primary">Trực tiếp</a>
              <a href="#" class="btn btn-outline-primary">Qua API</a>
            </div>
          </div>
        </b-card>
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/bao_noi.png" alt="Card image cap" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Báo nói</h5>
            <p class="card-text">Đọc báo giúp bạn từ 24 nguồn báo chính thống. Bạn không cần nhìn, chỉ cần nghe.</p>
            <p class="card-text">Bạn không cần nhìn, chỉ cần nghe.</p>
          </div>
        </b-card>
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/tts.png" alt="Card image cap" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Sách nói</h5>
            <p class="card-text">Chuyển sách viết thành sách nói tự động</p>
            <p class="card-text">Lắng nghe kiến thức tiếp thu, câu chuyện dễ dàng hơn</p>
          </div>
        </b-card>
      </div>
    </b-row>
    <b-row>
      <div class="card-deck">
        <b-card class="card text-center" >
            <img class="card-img-top" src="~/static/img/chatbot.png" alt="Card image cap" style="max-width: 40%">
            <div class="card-body">
              <h5 class="card-title">Chatbot</h5>
              <p class="card-text">Trợ lý ảo dựa trên trí tuệ nhân tạo</p>
            </div>
        </b-card>
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/mua_goi_cuoc.png" alt="Card image cap" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Mua gói cước</h5>
            <p class="card-text">Xem danh sách các gói cước và chi tiết tính năng báo giá</p>
          </div>
        </b-card>
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/lich_su_thanh_toan.png" alt="Card image cap" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Lịch sử thanh toán</h5>
            <p class="card-text">Xem lịch sử thanh toán và các hoạt động liên quan tới tài khoản</p>
          </div>
        </b-card>
      </div>
    </b-row>
    <b-row>
      <div class="card-deck">
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/thong_ke_chi_tiet.png" alt="thong ke chi tiet" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Thống kê chi tiết</h5>
            <p>Thống kê toàn bộ các chiến dịch, hoạt động</p>
          </div>
        </b-card>
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/ho_tro.png" alt="Support" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Hỗ trợ</h5>
            <p>Giải đáp mọi thắc mắc sớm nhất cho bạn</p>
          </div>
        </b-card>
        <b-card class="card text-center">
          <img class="card-img-top" src="~/static/img/tai_lieu.png" alt="thong ke chi tiet" style="max-width: 40%">
          <div class="card-body">
            <h5 class="card-title">Tài liệu</h5>
            <p>Hướng dẫn sử dụng và các câu hỏi thường gặp</p>
          </div>
        </b-card> 
      </div>
    </b-row>
  </div>
</template>
<script>
export default {
  layout: ''
}
</script>

<style  lang="scss" scoped>
.card {
  background-color: #f6f6f6;
  padding: 0px;
}
.card:hover {
  background-color: #FFF3D5;
  cursor: pointer;
}
.card-deck {
  min-width: 576px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 15px;
}
</style>

