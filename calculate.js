<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <style>/* .tier {
  border: 2px solid #ececec;
  border-radius: 10px; 
  padding: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
} */
.tier {
  padding: 30px;
  margin: 10px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 21px 3px rgba(0, 0, 0, 0.08);
}
h1,
h2,
h3,
h4,
h5,
p,
span,label,input,.font-diff,.result-text,.result-num {
  font-family: 'Roboto', sans-serif !important;
}
.summ_spn {
  font-size: 18px;
}
div#tier_2,
div#tier_3 {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
}
.main-tier {
  margin-top: 40px !important;
}
section.row {
  align-items: center;
}
.small {
  color: #ffffff;
}
.irs--round .irs-from:before,
.irs--round .irs-to:before,
.irs--round .irs-single:before {
  border-top-color: #9b8758 !important;
}
.irs--round .irs-bar,
.irs--round .irs-from,
.irs--round .irs-to,
.irs--round .irs-single {
  background-color: #9b8758 !important;
}
.irs--round .irs-handle {
  border: 4px solid #9b8758 !important;
}
.font-diff span {
  color: #9b8758;
}
.ul-list {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
/* .result-all:not(:last-child) {
  padding-bottom: 24px;
} */
.result-text {
  margin-right: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
.result-num {
  font-size: 18px;
  font-weight: 600;
  width: 155px;
  height: 45px;
  padding: 10px;
}
.for-output {
  color: #000000;
  border-radius: 7px;
  background: #f4f4f4;
}
@media (max-width: 768px) {
  .result-sec {
    margin-top: 20px !important;
  }
}



/* New Css */

.sliders-input {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.sliders-input input {
  padding: 10px;
  width: 200px;
  margin-left: 30px;
  border-width: 1px;
  height: 40px;
  border: 0px;
  border-radius: 7px;
  background: #f4f4f4;
  font-weight: 500;
}
.irs--round {
  width: 450px;
}
.font-diff h5 {
  width: 70px;
  height: 36px;
  border-radius: 7px;
  background: #f4f4f4;
  text-align: center;
  padding: 5px;
}
.font-diff {
  margin-top: 40px;
}
.slider-space {
  margin-top: 20px !important;
}
.result-sec {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 21px 3px rgba(0, 0, 0, 0.08);
  padding: 10px 30px !important;
  height: fit-content;
}
.result-sec h3 {
  margin: 0px !important;
  font-weight: 700;
}
.result-all {
  line-height: 1.5;
  position: relative;
  display: block;
  padding: 10px 0px;
}
.irs--round .irs-line{
  background-color: #f4f4f4 !important;
}
.irs--round .irs-from, .irs--round .irs-to, .irs--round .irs-single,.irs--round .irs-min, .irs--round .irs-max{
  display: none;
}
.irs--round .irs-handle {
  top: 28px !important;
  width: 20px !important;
  height: 20px !important;
  background-color: #9b8758 !important;
}
@media (max-width: 550px) {
  section.col-3,
  section.col-6,
  section.col-4 {
    width: 100%;
    margin: 10px auto;
  }
  .col {
    flex: 1 0 100% !important;
    margin: 10px auto;
  }

  .tier {
    margin: 0px;
  }
  .sliders-input input{

    width: 120px;
    margin-left: 20px;

  }
}
@media (max-width: 425px) {
  .result-text {
    width: 100%;
  }
  .sliders-input input{

    width: 120px;
    margin-left: 20px;
  }
  .font-diff {
    margin-top: 10px;
}
.sliders-input{
  flex-wrap: wrap;
  justify-content: flex-end;
}
}
@media (max-width: 375px){
  .sliders-input{
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}</style>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <!--Plugin CSS file with desired skin-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css"
    />

    <title>Calculator</title>
  </head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
  </style>
  <body>
    <!-- Tier 1 -->
    <div class="mx-4 tier row main-tier">
      <!-- Tier1 -->
      <div class="col-lg-8">
        <!-- Tier1 -->
        <div id="tier_1" class="my-1">
          <h4 class="my-1">Tier 1</h4>
          <p>
            <!-- Estimate how much you can earn from your recruits -->
            Estimate your earning potential from your downlines
          </p>
          <!--  -->

          <!-- Agent -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1">Number of agents i recruit</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="1_b71" />

                <input type="text" id="input_agent_1" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Transactions per year -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1">Annual transactions from agent(s)</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="b72" />

                <input type="text" id="input_b72" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Sale Price -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1">Average sales price</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="b73" />

                <input type="text" id="input_b73" value="400,000.00" readonly />
              </div>
            </div>
          </div>

          <!--  -->
          <section class="row">
            <section class="col-3">
              <!-- Total Agents  Involved-->
              <div class="font-diff">
                <h5 id="a75">1</h5>
                Total agents involved including myself
              </div>
            </section>
            <section class="col">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="l75">1</h5>
                Total transactions involved
              </div>
            </section>
          </section>

          <!--  -->
        </div>
      </div>
      <div class="col-lg-4 result-sec">
        <h3 class="mt-4">Summary</h3>

        <div class="sc-jeqYYF ul-container">
          <ul class="sc-gWXaA-D ul-list">
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 1st downline
              </div>
              <div class="result-num for-output f75">$102.48</div>
            </li>
            <!--  -->
            <!-- <li class="result-all">
              <div class="result-text">
                Total annual earnings from all levels
              </div>
              <div class="result-num for-output k71">$299.28</div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Tier 2 -->
    <div class="mx-4 tier row main-tier" id="tier_2" style="display: none">
      <!-- Tiers -->
      <div class="col-lg-8">
        <!-- Tier1 -->
        <div class="my-1">
          <h4 class="my-1">Tier 2</h4>
          <p>
            <!-- Estimate how much you can earn from your 1st & 2nd tier downlines -->
            Estimate your earning potential from your downlines
          </p>
          <!--  -->

          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>
                  <!-- Number of tier 1 agents recruiting other agents as their own
                  recruits/downline -->
                  Number of tier 1 agents actively recruiting
                </label>
              </div>
              <div class="sliders-input">
                <input type="range" id="2_f78" />

                <input type="text" id="input_agent_2" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Number of new agents being recruited: -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1"
                  >Number of new agents being recruited</label
                >
              </div>
              <div class="sliders-input">
                <input type="range" id="d79" />

                <input type="text" id="input_d79" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Annual transactions from agent(s) -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Annual transactions from agent(s)</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="f79" />

                <input type="text" id="input_f79" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Average sales price -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Average sales price</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="l79" />

                <input type="text" id="input_l79" value="400,000.00" readonly />
              </div>
            </div>
          </div>

          <!--  -->
          <section class="row">
            <section class="col-3">
              <!-- Total Agents  Involved-->
              <div class="font-diff">
                <h5 id="d80">1</h5>
                Number of new agents being recruited
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="a84">1</h5>
                Total agents involved including myself
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="l84">1</h5>
                Total transactions involved
              </div>
            </section>
          </section>

          <!--  -->
        </div>
      </div>
      <div class="col-lg-4 result-sec">
        <h3 class="mt-4">Summary</h3>

        <div class="sc-jeqYYF ul-container">
          <ul class="sc-gWXaA-D ul-list">
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 1st downline
              </div>
              <div class="result-num for-output f75">$102.48</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 2nd tier downline
              </div>
              <div class="result-num for-output f83">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Total annual earnings from all levels
              </div>
              <div class="result-num for-output k71">$299.28</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Tier 3 -->
    <div class="mx-4 tier row main-tier" id="tier_3" style="display: none">
      <!-- Tiers -->
      <div class="col-lg-8">
        <!-- Tier1 -->
        <div class="my-1">
          <h4 class="my-1">Tier 3</h4>
          <p>
            <!-- Estimate how much you can earn from your 1st, 2nd & 3rd tier downlines -->
            Estimate your earning potential from your downlines
          </p>
          <!--  -->

          <!--  -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>
                  <!-- How many Tier 2 agents brought in are bringing on other
                  agents (as their recruits/downline)? -->
                  Number of tier 2 agents actively recruiting
                </label>
              </div>
              <div class="sliders-input">
                <input type="range" id="3_f87" />

                <input type="text" id="input_agent_3" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Number of new agents being recruited: -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1"
                  >Number of new agents being recruited</label
                >
              </div>
              <div class="sliders-input">
                <input type="range" id="d88" />

                <input type="text" id="input_d88" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Annual transactions from agent(s) -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Annual transactions from agent(s)</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="f88" />

                <input type="text" id="input_f88" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Average sales price -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Average sales price</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="l88" />

                <input type="text" id="input_l88" value="400,000.00" readonly />
              </div>
            </div>
          </div>

          <!--  -->
          <section class="row">
            <section class="col-3">
              <!-- Total Agents  Involved-->
              <div class="font-diff">
                <h5 id="d89">1</h5>
                Number of new agents being recruited
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="a93">1</h5>
                Total agents involved including myself
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="l93">1</h5>
                Total transactions involved
              </div>
            </section>
          </section>

          <!--  -->
        </div>
      </div>
      <div class="col-lg-4 result-sec">
        <h3 class="mt-4">Summary</h3>

        <div class="sc-jeqYYF ul-container">
          <ul class="sc-gWXaA-D ul-list">
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 1st downline
              </div>
              <div class="result-num for-output f75">$102.48</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 2nd tier downline
              </div>
              <div class="result-num for-output f83">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 3rd tier downline
              </div>
              <div class="result-num for-output f92" id="">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Total annual earnings from all levels
              </div>
              <div class="result-num for-output k71">$299.28</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Tier 4 -->
    <div class="mx-4 tier row main-tier" id="tier_4" style="display: none">
      <!-- Tiers -->
      <div class="col-lg-8">
        <!-- Tier1 -->
        <div class="my-1">
          <h4 class="my-1">Tier 4</h4>
          <p>
            <!-- Estimate how much you can earn from your 1st, 2nd, 3rd & 4th tier -->
            Estimate your earning potential from your downlines downlines
          </p>
          <!--  -->

          <!-- How many Tier 2 agents brought in are bringing on other agents
                (as their recruits/downline)? -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>
                  <!-- How many Tier 3 agents brought in are bringing on other
                  agents (as their recruits/downline)? -->
                  Number of tier 3 agents actively recruiting
                </label>
              </div>
              <div class="sliders-input">
                <input type="range" id="4_f96" />

                <input type="text" id="input_agent_4" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Number of new agents being recruited: -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1"
                  >Number of new agents being recruited</label
                >
              </div>
              <div class="sliders-input">
                <input type="range" id="d97" />

                <input type="text" id="input_d97" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Annual transactions from agent(s) -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Annual transactions from agent(s)</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="f97" />

                <input type="text" id="input_f97" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Average sales price -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Average sales price</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="l97" />

                <input type="text" id="input_l97" value="400,000.00" readonly />
              </div>
            </div>
          </div>

          <!--  -->
          <section class="row">
            <section class="col-3">
              <!-- Total Agents  Involved-->
              <div class="font-diff">
                <h5 id="d98">1</h5>
                Number of new agents being recruited
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="a102">1</h5>
                Total agents involved including myself
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="l102">1</h5>
                Total transactions involved
              </div>
            </section>
          </section>

          <!--  -->
        </div>
      </div>
      <div class="col-lg-4 result-sec">
        <h3 class="mt-4">Summary</h3>

        <div class="sc-jeqYYF ul-container">
          <ul class="sc-gWXaA-D ul-list">
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 1st downline
              </div>
              <div class="result-num for-output f75">$102.48</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 2nd tier downline
              </div>
              <div class="result-num for-output f83">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 3rd tier downline
              </div>
              <div class="result-num for-output f92">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 4th tier downline
              </div>
              <div class="result-num for-output f101">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Total annual earnings from all levels
              </div>
              <div class="result-num for-output k71">$299.28</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Tier 4 -->
    <div class="mx-4 tier row main-tier" id="tier_5" style="display: none">
      <!-- Tiers -->
      <div class="col-lg-8">
        <!-- Tier1 -->
        <div class="my-1">
          <h4 class="my-1">Tier 5</h4>
          <p>
            <!-- Estimate how much you can earn from your 1st, 2nd, 3rd & 4th tier -->
            Estimate your earning potential from your downlines downlines
          </p>
          <!--  -->

          <!-- How many Tier 2 agents brought in are bringing on other agents
                (as their recruits/downline)? -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>
                  <!-- How many Tier 3 agents brought in are bringing on other
                  agents (as their recruits/downline)? -->
                  Number of tier 4 agents actively recruiting
                </label>
              </div>
              <div class="sliders-input">
                <input type="range" id="5_f146" />

                <input type="text" id="input_agent_5" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Number of new agents being recruited: -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label for="slider1"
                  >Number of new agents being recruited</label
                >
              </div>
              <div class="sliders-input">
                <input type="range" id="d147" />

                <input type="text" id="input_d147" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Annual transactions from agent(s) -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Annual transactions from agent(s)</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="f147" />

                <input type="text" id="input_f147" value="0" readonly />
              </div>
            </div>
          </div>
          <!-- Average sales price -->
          <div class="row slider-space">
            <div class="col">
              <div class="labels">
                <label>Average sales price</label>
              </div>
              <div class="sliders-input">
                <input type="range" id="l147" />

                <input
                  type="text"
                  id="input_l147"
                  value="400,000.00"
                  readonly
                />
              </div>
            </div>
          </div>

          <!--  -->
          <section class="row">
            <section class="col-3">
              <!-- Total Agents  Involved-->
              <div class="font-diff">
                <h5 id="d148">1</h5>
                Number of new agents being recruited
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="a152">1</h5>
                Total agents involved including myself
              </div>
            </section>
            <section class="col-3">
              <!-- Total Transactions -->
              <div class="font-diff">
                <h5 id="l152">1</h5>
                Total transactions involved
              </div>
            </section>
          </section>

          <!--  -->
        </div>
      </div>
      <div class="col-lg-4 result-sec">
        <h3 class="mt-4">Summary</h3>

        <div class="sc-jeqYYF ul-container">
          <ul class="sc-gWXaA-D ul-list">
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 1st downline
              </div>
              <div class="result-num for-output f75">$102.48</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 2nd tier downline
              </div>
              <div class="result-num for-output f83">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 3rd tier downline
              </div>
              <div class="result-num for-output f92">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 4th tier downline
              </div>
              <div class="result-num for-output f101">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Annual earnings from my 5th tier downline
              </div>
              <div class="result-num for-output f151" id="">$299.28</div>
            </li>
            <!--  -->
            <li class="result-all">
              <div class="result-text">
                Total annual earnings from all levels
              </div>
              <div class="result-num for-output k71">$299.28</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- Moment.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>

    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
      crossorigin="anonymous"
    ></script>

    <script var formatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// L1
var b71 = 0;
var b72 = 0;
var b73 = 400000;
var a75 = 0;
var f75 = 0;
var l75 = 0;

// L2
var f78 = 0;
var d79 = 0;
var f79 = 0;
var l79 = 400000;
var d80 = 0;
var f83 = 0;
var a84 = 0;
var f84 = 0;
var l84 = 0;

// L3
var f87 = 0;
var d88 = 0;
var f88 = 0;
var l88 = 400000;
var d89 = 0;
var f92 = 0;
var a93 = 0;
// var f93 = 0;
var l93 = 0;

// L4
var f96 = 0;
var d97 = 0;
var f97 = 0;
var l97 = 400000;
var d98 = 0;
var f92 = 0;
var a93 = 0;
var l93 = 0;

// L5
var f146 = 0;
var d147 = 0;
var f147 = 0;
var l147 = 400000;
var d148 = 0;
var f151 = 0;
var a152 = 0;
var l152 = 0;

var k71 = 0;

//
const data = [
  [0.0, 0.0, 0.0, 0.0, 7.0, 5.0, 5.0, 3.0, 3.0],
  [0.492, 100000.0, 492.0, 1070.0, 34.44, 24.6, 24.6, 14.76, 14.76],
  [0.492, 150000.0, 738.0, 1070.0, 51.66, 36.9, 36.9, 22.14, 22.14],
  [0.492, 200000.0, 984.0, 1070.0, 68.88, 49.2, 49.2, 29.52, 29.52],
  [0.492, 250000.0, 1230.0, 1070.0, 86.1, 61.5, 61.5, 36.9, 36.9],
  [0.488, 300000.0, 1464.0, 1070.0, 102.48, 73.2, 73.2, 43.92, 43.92],
  [0.48514, 350000.0, 1698.0, 1070.0, 118.86, 84.9, 84.9, 50.94, 50.94],
  [
    0.483, 400000.0, 1932.0, 1070.0, 135.24, 96.6, 96.6, 57.96, 57.96, 444.36,
    23.0, 2557.64,
  ],
  [
    0.48133, 450000.0, 2166.0, 1070.0, 151.62, 108.3, 108.3, 64.98, 64.98,
    498.18, 23.0, 2737.82,
  ],
  [
    0.48, 500000.0, 2400.0, 1070.0, 168.0, 120.0, 120.0, 72.0, 72.0, 552.0,
    23.0, 2918.0,
  ],
  [
    0.47564, 550000.0, 2616.0, 1070.0, 183.12, 130.8, 130.8, 78.48, 78.48,
    601.68, 23.0, 3084.32,
  ],
  [
    0.472, 600000.0, 2832.0, 1070.0, 198.24, 141.6, 141.6, 84.96, 84.96, 651.36,
    23.0, 3250.64,
  ],
  [
    0.46892, 650000.0, 3048.0, 1070.0, 213.36, 152.4, 152.4, 91.44, 91.44,
    701.04, 23.0, 3416.96,
  ],
  [
    0.46629, 700000.0, 3264.0, 1070.0, 228.48, 163.2, 163.2, 97.92, 97.92,
    750.72, 23.0, 3583.28,
  ],
  [
    0.464, 750000.0, 3480.0, 1070.0, 243.6, 174.0, 174.0, 104.4, 104.4, 800.4,
    23.0, 3749.6,
  ],
  [
    0.462, 800000.0, 3696.0, 1070.0, 258.72, 184.8, 184.8, 110.88, 110.88,
    850.08, 23.0, 3915.92,
  ],
  [
    0.46024, 850000.0, 3912.0, 1070.0, 273.84, 195.6, 195.6, 117.36, 117.36,
    899.76, 23.0, 4082.24,
  ],
  [
    0.45867, 900000.0, 4128.0, 1070.0, 288.96, 206.4, 206.4, 123.84, 123.84,
    949.44, 23.0, 4248.56,
  ],
  [
    0.45726, 950000.0, 4344.0, 1070.0, 304.08, 217.2, 217.2, 130.32, 130.32,
    999.12, 23.0, 4414.88,
  ],
  [
    0.456, 1000000.0, 4560.0, 1070.0, 319.2, 228.0, 228.0, 136.8, 136.8, 1048.8,
    23.0, 4581.2,
  ],
  [
    0.448, 1050000.0, 4704.0, 1070.0, 329.28, 235.2, 235.2, 141.12, 141.12,
    1081.92, 23.0, 4692.08,
  ],
  [
    0.44073, 1100000.0, 4848.0, 1070.0, 339.36, 242.4, 242.4, 145.44, 145.44,
    1115.04, 23.0, 4802.96,
  ],
  [
    0.43409, 1150000.0, 4992.0, 1070.0, 349.44, 249.6, 249.6, 149.76, 149.76,
    1148.16, 23.0, 4913.84,
  ],
  [
    0.428, 1200000.0, 5136.0, 1070.0, 359.52, 256.8, 256.8, 154.08, 154.08,
    1181.28, 23.0, 5024.72,
  ],
  [
    0.4224, 1250000.0, 5280.0, 1070.0, 369.6, 264.0, 264.0, 158.4, 158.4,
    1214.4, 23.0, 5135.6,
  ],
  [
    0.41723, 1300000.0, 5424.0, 1070.0, 379.68, 271.2, 271.2, 162.72, 162.72,
    1247.52, 23.0, 5246.48,
  ],
  [
    0.41244, 1350000.0, 5568.0, 1070.0, 389.76, 278.4, 278.4, 167.04, 167.04,
    1280.64, 23.0, 5357.36,
  ],
  [
    0.408, 1400000.0, 5712.0, 1070.0, 399.84, 285.6, 285.6, 171.36, 171.36,
    1313.76, 23.0, 5468.24,
  ],
  [
    0.40386, 1450000.0, 5856.0, 1070.0, 409.92, 292.8, 292.8, 175.68, 175.68,
    1346.88, 23.0, 5579.12,
  ],
  [
    0.4, 1500000.0, 6000.0, 1070.0, 420.0, 300.0, 300.0, 180.0, 180.0, 1380.0,
    23.0, 5690.0,
  ],
  [
    0.39639, 1550000.0, 6144.0, 1070.0, 430.08, 307.2, 307.2, 184.32, 184.32,
    1413.12, 23.0, 5800.88,
  ],
  [
    0.393, 1600000.0, 6288.0, 1070.0, 440.16, 314.4, 314.4, 188.64, 188.64,
    1446.24, 23.0, 5911.76,
  ],
  [
    0.38982, 1650000.0, 6432.0, 1070.0, 450.24, 321.6, 321.6, 192.96, 192.96,
    1479.36, 23.0, 6022.64,
  ],
  [
    0.38682, 1700000.0, 6576.0, 1070.0, 460.32, 328.8, 328.8, 197.28, 197.28,
    1512.48, 23.0, 6133.52,
  ],
  [
    0.384, 1750000.0, 6720.0, 1070.0, 470.4, 336.0, 336.0, 201.6, 201.6, 1545.6,
    23.0, 6244.4,
  ],
  [
    0.38133, 1800000.0, 6864.0, 1070.0, 480.48, 343.2, 343.2, 205.92, 205.92,
    1578.72, 23.0, 6355.28,
  ],
  [
    0.37881, 1850000.0, 7008.0, 1070.0, 490.56, 350.4, 350.4, 210.24, 210.24,
    1611.84, 23.0, 6466.16,
  ],
  [
    0.37642, 1900000.0, 7152.0, 1070.0, 500.64, 357.6, 357.6, 214.56, 214.56,
    1644.96, 23.0, 6577.04,
  ],
  [
    0.37415, 1950000.0, 7296.0, 1070.0, 510.72, 364.8, 364.8, 218.88, 218.88,
    1678.08, 23.0, 6687.92,
  ],
  [
    0.372, 2000000.0, 7440.0, 1070.0, 520.8, 372.0, 372.0, 223.2, 223.2, 1711.2,
    23.0, 6798.8,
  ],
  [
    0.36995, 2050000.0, 7584.0, 1070.0, 530.88, 379.2, 379.2, 227.52, 227.52,
    1744.32, 23.0, 6909.68,
  ],
  [
    0.368, 2100000.0, 7728.0, 1070.0, 540.96, 386.4, 386.4, 231.84, 231.84,
    1777.44, 23.0, 7020.56,
  ],
  [
    0.36614, 2150000.0, 7872.0, 1070.0, 551.04, 393.6, 393.6, 236.16, 236.16,
    1810.56, 23.0, 7131.44,
  ],
  [
    0.36436, 2200000.0, 8016.0, 1070.0, 561.12, 400.8, 400.8, 240.48, 240.48,
    1843.68, 23.0, 7242.32,
  ],
  [
    0.36267, 2250000.0, 8160.0, 1070.0, 571.2, 408.0, 408.0, 244.8, 244.8,
    1876.8, 23.0, 7353.2,
  ],
  [
    0.36104, 2300000.0, 8304.0, 1070.0, 581.28, 415.2, 415.2, 249.12, 249.12,
    1909.92, 23.0, 7464.08,
  ],
  [
    0.35949, 2350000.0, 8448.0, 1070.0, 591.36, 422.4, 422.4, 253.44, 253.44,
    1943.04, 23.0, 7574.96,
  ],
  [
    0.358, 2400000.0, 8592.0, 1070.0, 601.44, 429.6, 429.6, 257.76, 257.76,
    1976.16, 23.0, 7685.84,
  ],
  [
    0.35657, 2450000.0, 8736.0, 1070.0, 611.52, 436.8, 436.8, 262.08, 262.08,
    2009.28, 23.0, 7796.72,
  ],
  [
    0.3552, 2500000.0, 8880.0, 1070.0, 621.6, 444.0, 444.0, 266.4, 266.4,
    2042.4, 23.0, 7907.6,
  ],
  [
    0.35318, 2550000.0, 9006.0, 1070.0, 630.42, 450.3, 450.3, 270.18, 270.18,
    2071.38, 23.0, 8004.62,
  ],
  [
    0.35123, 2600000.0, 9132.0, 1070.0, 639.24, 456.6, 456.6, 273.96, 273.96,
    2100.36, 23.0, 8101.64,
  ],
  [
    0.34936, 2650000.0, 9258.0, 1070.0, 648.06, 462.9, 462.9, 277.74, 277.74,
    2129.34, 23.0, 8198.66,
  ],
  [
    0.34756, 2700000.0, 9384.0, 1070.0, 656.88, 469.2, 469.2, 281.52, 281.52,
    2158.32, 23.0, 8295.68,
  ],
  [
    0.34582, 2750000.0, 9510.0, 1070.0, 665.7, 475.5, 475.5, 285.3, 285.3,
    2187.3, 23.0, 8392.7,
  ],
  [
    0.34414, 2800000.0, 9636.0, 1070.0, 674.52, 481.8, 481.8, 289.08, 289.08,
    2216.28, 23.0, 8489.72,
  ],
  [
    0.34253, 2850000.0, 9762.0, 1070.0, 683.34, 488.1, 488.1, 292.86, 292.86,
    2245.26, 23.0, 8586.74,
  ],
  [
    0.34097, 2900000.0, 9888.0, 1070.0, 692.16, 494.4, 494.4, 296.64, 296.64,
    2274.24, 23.0, 8683.76,
  ],
  [
    0.33946, 2950000.0, 10014.0, 1070.0, 700.98, 500.7, 500.7, 300.42, 300.42,
    2303.22, 23.0, 8780.78,
  ],
  [
    0.338, 3000000.0, 10140.0, 1070.0, 709.8, 507.0, 507.0, 304.2, 304.2,
    2332.2, 23.0, 8877.8,
  ],
  [
    0.33659, 3050000.0, 10266.0, 1070.0, 718.62, 513.3, 513.3, 307.98, 307.98,
    2361.18, 23.0, 8974.82,
  ],
  [
    0.33523, 3100000.0, 10392.0, 1070.0, 727.44, 519.6, 519.6, 311.76, 311.76,
    2390.16, 23.0, 9071.84,
  ],
  [
    0.3339, 3150000.0, 10518.0, 1070.0, 736.26, 525.9, 525.9, 315.54, 315.54,
    2419.14, 23.0, 9168.86,
  ],
  [
    0.33263, 3200000.0, 10644.0, 1070.0, 745.08, 532.2, 532.2, 319.32, 319.32,
    2448.12, 23.0, 9265.88,
  ],
  [
    0.33138, 3250000.0, 10770.0, 1070.0, 753.9, 538.5, 538.5, 323.1, 323.1,
    2477.1, 23.0, 9362.9,
  ],
  [
    0.33018, 3300000.0, 10896.0, 1070.0, 762.72, 544.8, 544.8, 326.88, 326.88,
    2506.08, 23.0, 9459.92,
  ],
  [
    0.32901, 3350000.0, 11022.0, 1070.0, 771.54, 551.1, 551.1, 330.66, 330.66,
    2535.06, 23.0, 9556.94,
  ],
  [
    0.32788, 3400000.0, 11148.0, 1070.0, 780.36, 557.4, 557.4, 334.44, 334.44,
    2564.04, 23.0, 9653.96,
  ],
  [
    0.32678, 3450000.0, 11274.0, 1070.0, 789.18, 563.7, 563.7, 338.22, 338.22,
    2593.02, 23.0, 9750.98,
  ],
  [
    0.32571, 3500000.0, 11400.0, 1070.0, 798.0, 570.0, 570.0, 342.0, 342.0,
    2622.0, 23.0, 9848.0,
  ],
  [
    0.32468, 3550000.0, 11526.0, 1070.0, 806.82, 576.3, 576.3, 345.78, 345.78,
    2650.98, 23.0, 9945.02,
  ],
  [
    0.32367, 3600000.0, 11652.0, 1070.0, 815.64, 582.6, 582.6, 349.56, 349.56,
    2679.96, 23.0, 10042.04,
  ],
  [
    0.32268, 3650000.0, 11778.0, 1070.0, 824.46, 588.9, 588.9, 353.34, 353.34,
    2708.94, 23.0, 10139.06,
  ],
  [
    0.32173, 3700000.0, 11904.0, 1070.0, 833.28, 595.2, 595.2, 357.12, 357.12,
    2737.92, 23.0, 10236.08,
  ],
  [
    0.3208, 3750000.0, 12030.0, 1070.0, 842.1, 601.5, 601.5, 360.9, 360.9,
    2766.9, 23.0, 10333.1,
  ],
  [
    0.31989, 3800000.0, 12156.0, 1070.0, 850.92, 607.8, 607.8, 364.68, 364.68,
    2795.88, 23.0, 10430.12,
  ],
  [
    0.31901, 3850000.0, 12282.0, 1070.0, 859.74, 614.1, 614.1, 368.46, 368.46,
    2824.86, 23.0, 10527.14,
  ],
  [
    0.31815, 3900000.0, 12408.0, 1070.0, 868.56, 620.4, 620.4, 372.24, 372.24,
    2853.84, 23.0, 10624.16,
  ],
  [
    0.31732, 3950000.0, 12534.0, 1070.0, 877.38, 626.7, 626.7, 376.02, 376.02,
    2882.82, 23.0, 10721.18,
  ],
  [
    0.3165, 4000000.0, 12660.0, 1070.0, 886.2, 633.0, 633.0, 379.8, 379.8,
    2911.8, 23.0, 10818.2,
  ],
  [
    0.3157, 4050000.0, 12786.0, 1070.0, 895.02, 639.3, 639.3, 383.58, 383.58,
    2940.78, 23.0, 10915.22,
  ],
  [
    0.31493, 4100000.0, 12912.0, 1070.0, 903.84, 645.6, 645.6, 387.36, 387.36,
    2969.76, 23.0, 11012.24,
  ],
  [
    0.31417, 4150000.0, 13038.0, 1070.0, 912.66, 651.9, 651.9, 391.14, 391.14,
    2998.74, 23.0, 11109.26,
  ],
  [
    0.31343, 4200000.0, 13164.0, 1070.0, 921.48, 658.2, 658.2, 394.92, 394.92,
    3027.72, 23.0, 11206.28,
  ],
  [
    0.31271, 4250000.0, 13290.0, 1070.0, 930.3, 664.5, 664.5, 398.7, 398.7,
    3056.7, 23.0, 11303.3,
  ],
  [
    0.312, 4300000.0, 13416.0, 1070.0, 939.12, 670.8, 670.8, 402.48, 402.48,
    3085.68, 23.0, 11400.32,
  ],
  [
    0.31131, 4350000.0, 13542.0, 1070.0, 947.94, 677.1, 677.1, 406.26, 406.26,
    3114.66, 23.0, 11497.34,
  ],
  [
    0.31064, 4400000.0, 13668.0, 1070.0, 956.76, 683.4, 683.4, 410.04, 410.04,
    3143.64, 23.0, 11594.36,
  ],
  [
    0.30998, 4450000.0, 13794.0, 1070.0, 965.58, 689.7, 689.7, 413.82, 413.82,
    3172.62, 23.0, 11691.38,
  ],
  [
    0.30933, 4500000.0, 13920.0, 1070.0, 974.4, 696.0, 696.0, 417.6, 417.6,
    3201.6, 23.0, 11788.4,
  ],
  [
    0.3087, 4550000.0, 14046.0, 1070.0, 983.22, 702.3, 702.3, 421.38, 421.38,
    3230.58, 23.0, 11885.42,
  ],
  [
    0.30809, 4600000.0, 14172.0, 1070.0, 992.04, 708.6, 708.6, 425.16, 425.16,
    3259.56, 23.0, 11982.44,
  ],
  [
    0.30748, 4650000.0, 14298.0, 1070.0, 1000.86, 714.9, 714.9, 428.94, 428.94,
    3288.54, 12079.46,
  ],
  [
    0.30689, 4700000.0, 14424.0, 1070.0, 1009.68, 721.2, 721.2, 432.72, 432.72,
    3317.52, 12176.48,
  ],
  [
    0.30632, 4750000.0, 14550.0, 1070.0, 1018.5, 727.5, 727.5, 436.5, 436.5,
    3346.5, 12273.5,
  ],
  [
    0.30575, 4800000.0, 14676.0, 1070.0, 1027.32, 733.8, 733.8, 440.28, 440.28,
    3375.48, 12370.52,
  ],
  [
    0.3052, 4850000.0, 14802.0, 1070.0, 1036.14, 740.1, 740.1, 444.06, 444.06,
    3404.46, 12467.54,
  ],
  [
    0.30465, 4900000.0, 14928.0, 1070.0, 1044.96, 746.4, 746.4, 447.84, 447.84,
    3433.44, 12564.56,
  ],
  [
    0.30412, 4950000.0, 15054.0, 1070.0, 1053.78, 752.7, 752.7, 451.62, 451.62,
    3462.42, 12661.58,
  ],
  [
    0.3036, 5000000.0, 15180.0, 1070.0, 1062.6, 759.0, 759.0, 455.4, 455.4,
    3491.4, 12758.6,
  ],
];

// Range Slider main
$("#1_b71, #2_f78, #3_f87, #4_f96, #5_f146").ionRangeSlider({
  min: 0,
  max: 30,
  step: 1,
  from: 0,
  skin: "round",
  onChange: function (data) {
    var sliderId = data.input[0]["id"].split("_")[0];
    let nextTier = document.getElementById("tier_" + (parseInt(sliderId) + 1));
    // let nextSec = document.getElementById("sec_" + (parseInt(sliderId) + 1));

    if (parseInt(data.from) > 0) {
      // Show the next tier when the value is greater than 0
      if (nextTier) {
        nextTier.style.display = "flex";
      }

      //
    } else {
      // Hide the next tier when the value is 0
      if (nextTier) {
        nextTier.style.display = "none";
        // nextSec.style.display = "none";
      }
    }

    if (sliderId == "1") {
      $("#2_f78").data("ionRangeSlider").update({
        max: data.from,
      });
    }

    // if (sliderId == "2") {
    //   $("#3_f87").data("ionRangeSlider").update({
    //     max: data.from,
    //   });
    // }

    // if (sliderId == "3") {
    //   $("#4_f96").data("ionRangeSlider").update({
    //     max: data.from,
    //   });
    // }

    document.getElementById("input_agent_" + sliderId).value = data.from;
    calculate();
  },
});

// Agents
$("#d79, #d88, #d97, #d147").ionRangeSlider({
  min: 0,
  max: 10,
  step: 1,
  from: 0,
  skin: "round",
  // grid: true,
  // grid_num: 5,
  onChange: function (data) {
    //
    var sliderId = data.input[0]["id"];
    document.getElementById("input_" + sliderId).value = data.from;

    if (sliderId == "d79") {
      $("#3_f87").data("ionRangeSlider").update({
        max: data.from,
      });
    }

    if (sliderId == "d88") {
      $("#4_f96").data("ionRangeSlider").update({
        max: data.from,
      });
    }

    if (sliderId == "d97") {
      $("#5_f146").data("ionRangeSlider").update({
        max: data.from,
      });
    }

    calculate();
  },
});

// Transactions
$("#b72, #f79 , #f88, #f97, #f147").ionRangeSlider({
  min: 0,
  max: 20,
  step: 1,
  from: 0,
  skin: "round",
  onChange: function (data) {
    //
    var sliderId = data.input[0]["id"];
    document.getElementById("input_" + sliderId).value = data.from;

    calculate();
  },
});

//  Price
$("#b73, #l79, #l88, #l97, #l147").ionRangeSlider({
  min: 400000,
  max: 5000000,
  step: 50000,
  from: 400000,
  skin: "round",
  // grid: true,
  // grid_num: 5,
  onChange: function (data) {
    //
    //
    var sliderId = data.input[0]["id"];
    document.getElementById("input_" + sliderId).value =
      data.from.toLocaleString() + ".00";

    //
    data.input[0]["id"] === "b73" ? (b73 = data.from) : "";
    data.input[0]["id"] === "l79" ? (l79 = data.from) : "";
    data.input[0]["id"] === "l88" ? (l88 = data.from) : "";
    data.input[0]["id"] === "l97" ? (l97 = data.from) : "";
    data.input[0]["id"] === "l147" ? (l147 = data.from) : "";

    //
    calculate();
  },
});

// Function for calculation
function calculate() {
  k71 = 0;

  // L1
  b71 = 0;
  b72 = 0;
  a75 = 0;
  f75 = 0;
  l75 = 0;

  // L2
  f78 = 0;
  d79 = 0;
  f79 = 0;
  d80 = 0;
  f83 = 0;
  a84 = 0;
  f84 = 0;
  l84 = 0;

  // L3
  f87 = 0;
  d88 = 0;
  f88 = 0;
  d89 = 0;
  f92 = 0;
  a93 = 0;
  l93 = 0;

  // L4
  f96 = 0;
  d97 = 0;
  f97 = 0;
  d89 = 0;
  f92 = 0;
  a93 = 0;
  l93 = 0;

  // L5
  f146 = 0;
  d147 = 0;
  f147 = 0;
  d148 = 0;
  f151 = 0;
  a152 = 0;
  l152 = 0;

  // Level 1
  b71 = parseFloat(document.getElementById("1_b71").value) || 0;
  b72 = parseFloat(document.getElementById("b72").value) || 0;

  a75 = b71 + 1;
  document.getElementById("a75").innerText = a75;

  f75 = b71 * b72 * data.find((row) => row[1] === b73)?.[4];
  document
    .querySelectorAll(".f75")
    .forEach((div) => (div.textContent = "$ " + formatter.format(f75)));

  l75 = b71 * b72;
  document.getElementById("l75").innerText = l75;

  // Level 2
  f78 = parseFloat(document.getElementById("2_f78").value) || 0;
  d79 = parseFloat(document.getElementById("d79").value) || 0;
  f79 = parseFloat(document.getElementById("f79").value) || 0;

  d80 = f78 * d79;
  document.getElementById("d80").innerText = d80;

  //
  f83 = d79 * f78 * d79 * data.find((row) => row[1] === l79)?.[5];
  document
    .querySelectorAll(".f83")
    .forEach((div) => (div.textContent = "$ " + formatter.format(f83)));

  a84 = a75 + d79 * f78;
  document.getElementById("a84").innerText = a84;

  // f84 = f83 + f75;
  // document.getElementById("f84").innerText = "$ " + Math.round(f84 * 100) / 100;

  l84 = l75 + d79 * f79 * f78;
  document.getElementById("l84").innerText = l84;

  // Level 3
  f87 = parseFloat(document.getElementById("3_f87").value) || 0;
  d88 = parseFloat(document.getElementById("d88").value) || 0;
  f88 = parseFloat(document.getElementById("f88").value) || 0;

  d89 = f87 * d88;
  document.getElementById("d89").innerText = d89;

  f92 = f88 * d88 * f87 * data.find((row) => row[1] === l88)?.[6];

  document
    .querySelectorAll(".f92")
    .forEach((div) => (div.textContent = "$ " + formatter.format(f92)));

  a93 = a84 + d88 * f87;
  document.getElementById("a93").innerText = a93;

  l93 = l84 + d88 * f88 * f87;
  document.getElementById("l93").innerText = l93;

  // Level 4
  f96 = parseFloat(document.getElementById("4_f96").value) || 0;
  d97 = parseFloat(document.getElementById("d97").value) || 0;
  f97 = parseFloat(document.getElementById("f97").value) || 0;

  d98 = f96 * d97;
  document.getElementById("d98").innerText = d98;

  f101 = f97 * d97 * f96 * data.find((row) => row[1] === l97)?.[7];

  document
    .querySelectorAll(".f101")
    .forEach((div) => (div.textContent = "$ " + formatter.format(f101)));

  a102 = a93 + d97 * f96;
  document.getElementById("a102").innerText = a102;

  l102 = l93 + d97 * f97 * f96;
  document.getElementById("l102").innerText = l102;

  //
  // Level 5

  f146 = parseFloat(document.getElementById("5_f146").value) || 0;
  d147 = parseFloat(document.getElementById("d147").value) || 0;
  f147 = parseFloat(document.getElementById("f147").value) || 0;

  d148 = f146 * d147;
  document.getElementById("d148").innerText = d148;

  f151 = f147 * d88 * d147 * data.find((row) => row[1] === l147)?.[7];

  document
    .querySelectorAll(".f151")
    .forEach((div) => (div.textContent = "$ " + formatter.format(f151)));

  a152 = a93 + d147 * f146;
  document.getElementById("a152").innerText = a152;

  l152 = l102 + d147 * f147 * f146;
  document.getElementById("l152").innerText = l152;

  //

  // Total Summary
  k71 = f75 + f83 + f92 + f101 + f151;
  document
    .querySelectorAll(".k71")
    .forEach((div) => (div.textContent = "$ " + formatter.format(k71)));
}
</script>
  </body>
</html>

