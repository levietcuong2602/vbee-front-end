<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col
        sm="12"
        lg="6"
      >
        <b-row>
          <b-col sm=8>
            <input
              type="text"
              class="form-control"
              placeholder="Nhập vào tên người dùng"
            >
          </b-col>
          <b-col sm=4>
            <div class="custom-control custom-checkbox">
              <input
                id="customChk1"
                type="checkbox"
                class="custom-control-input"
                value="1"
                checked
              >
              <label
                class="custom-control-label"
                for="customChk1"
              >Tất cả</label>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        sm="12"
        lg="6"
      >
        <el-date-picker
          type="daterange"
          range-separator="Đến"
          start-placeholder="Chọn ngày"
          end-placeholder="Chọn ngày"
          style="width:100%"
        >
        </el-date-picker>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        sm=12
        md="6"
        lg="4"
      >
        <div class="title">
          <h4>Tổng quan</h4>
        </div>
        <div class="main-content">
          <b-row>
            <ItemGeneral
              number="169.437"
              title="Yêu cầu"
              icon="icon-like"
            />
            <ItemGeneral
              number="169.430"
              title="Yêu cầu thành công"
              icon="icon-dislike"
              leftColor="#9FF3C3"
              rightColor="#C8FADD"
            />
            <ItemGeneral
              number="0"
              title="Yêu cầu thất bại"
              icon="icon-close"
              leftColor="#C85F53"
              rightColor="#FF7F71"
            />
            <ItemGeneral
              number="1"
              title="Yêu cầu đang xử lý"
              icon="icon-reload"
              leftColor="#FFE9B4"
              rightColor="#FFF3D5"
            />
            <ItemGeneral
              number="100%"
              title="Tỷ lệ thành công"
              icon="icon-chart"
              leftColor="#9FF3C2"
              rightColor="#C8FADD"
            />
            <ItemGeneral
              number="1-5"
              title="Sản phẩm-Dịch vụ"
              icon="icon-grid"
              leftColor="#406EAC"
              rightColor="#74A3E1"
            />
            <ItemGeneral
              number="15"
              title="Người dùng"
              icon="icon-people"
              leftColor="#FFE9B4"
              rightColor="#FFF3D5"
            />
            <ItemGeneral
              number="1.309.000"
              title="Tiền nạp hệ thống"
              icon="icon-credit-card"
              leftColor="#C85F53"
              rightColor="#FF7F71"
            />
          </b-row>
        </div>
      </b-col>
      <b-col
        sm=6
        md="6"
        lg="4"
      >
        <div class="title">
          <h4>Thống kê lượng request</h4>
        </div>
        <div class="main-content">
          <CardBarChart class="chart-wrapper px-3" />
        </div>
        <div class="title-bottom">
          <h2>Tổng số yêu cầu: {{formatNumber(requestCountTotal)}}</h2>
          <p><span>Thành công: {{formatNumber(requestCountSuccess)}}</span> - <span>Thất bại: {{formatNumber(requestCountFail)}}</span> - <span>Đang xử lý: {{formatNumber(requestCountProcessing)}}</span></p>
        </div>
      </b-col>
      <b-col
        sm=6
        md="6"
        lg="4"
      >
        <div class="title">
          <h4>Dữ liệu so sánh kỳ trước</h4>
        </div>
        <div class="main-content-data">
          <b-row>
            <b-col
              sm="6"
              lg="6"
            >Số tiền đã giao dịch: </b-col>
            <b-col
              sm="6"
              lg="6"
            >
              <b style="margin-bottom: 0px;">1.309.000 đ</b>
              <p style="color: green">Tăng 1.309.000 %</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              sm="6"
              lg="6"
            >Tổng số giao dịch: </b-col>
            <b-col
              sm="6"
              lg="6"
            >
              <b style="margin-bottom: 0px;">15</b>
              <p style="color: green">Tăng 15 %</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              sm="6"
              lg="6"
            >Tổng số chiến dịch: </b-col>
            <b-col
              sm="6"
              lg="6"
            >
              <b style="margin-bottom: 0px;">210.447</b>
              <p style="color: green">Tăng 210.447 %</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              sm="6"
              lg="6"
            >Số tiền chiết khấu đại diện kinh doanh: </b-col>
            <b-col
              sm="6"
              lg="6"
            >
              <b>183.260 đ</b>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              sm="6"
              lg="6"
            >Doanh thu sau triết khấu: </b-col>
            <b-col
              sm="6"
              lg="6"
            >
              <b>1.125.740 đ</b>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              sm="6"
              lg="6"
            >Tỷ lệ chiết khấu kinh doanh: </b-col>
            <b-col
              sm="6"
              lg="6"
            >
              <b>14 %</b>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import CardLine1ChartExample from '@/components/dashboard/CardLine1ChartExample';
import CardBarChart from '@/components/dashboard/CardBarChart';
import ItemGeneral from '@/components/dashboard/ItemGeneral';

export default {
  data() {
    return {
      requestCountTotal: 210447,
      requestCountSuccess: 210439,
      requestCountFail: 0,
      requestCountProcessing: 1,
    }
  },
  components: {
    CardLine1ChartExample,
    CardBarChart,
    ItemGeneral,
  },
  methods: {
    formatNumber(value) {
      const val = (value / 1).toFixed().replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  }
}
</script>

<style scoped>
.checkbox-all {
  width: 18px;
  height: 18px;
}
.main-content-data {
  font-weight: normal;
  margin: 0;
  font-size: 11px;
  text-align: left;
}
.title-bottom h2 {
  font-weight: bold;
  text-align: center;
  font-size: 13px;
}
.title-bottom p {
  font-size: 13px;
  text-align: center;
  margin: 0;
  font-weight: bold;
}
</style>
