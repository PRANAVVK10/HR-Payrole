import React from "react";

function Project () {
    return(
        <div className="tab-content m-5">
        {/*begin::Tab pane*/}
        <div
          id="kt_project_targets_card_pane"
          className="tab-pane fade active show"
          role="tabpanel"
        >
          {/*begin::Row*/}
          <div className="row g-9">
            {/*begin::Col*/}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
                  {/*begin::Menu*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">UI Design</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Melody Macy"
                        data-bs-original-title="Melody Macy"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Harry Mcpherson"
                        data-bs-original-title="Harry Mcpherson"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-19.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Susan Redwood"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                          S
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">5</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
                  {/*begin::Menu*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">UI Design</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Melody Macy"
                        data-bs-original-title="Melody Macy"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Harry Mcpherson"
                        data-bs-original-title="Harry Mcpherson"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-19.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Susan Redwood"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                          S
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">5</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">UI Design</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Melody Macy"
                        data-bs-original-title="Melody Macy"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Harry Mcpherson"
                        data-bs-original-title="Harry Mcpherson"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-19.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Susan Redwood"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                          S
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">5</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
                  {/*begin::Menu*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">UI Design</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Melody Macy"
                        data-bs-original-title="Melody Macy"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Harry Mcpherson"
                        data-bs-original-title="Harry Mcpherson"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-19.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Susan Redwood"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                          S
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">5</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/*end::Col*/}
            {/* begin col */}
            <div className="col-md-3 col-lg-12 col-xl-3">
              {/*begin::Col header*/}
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span>
                  </div>
                  {/*begin::Menu*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              x={5}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 1*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_63a837d361ce8"
                    >
                      {/*begin::Header*/}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className="separator border-gray-200" />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className="px-7 py-5">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">Status:</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_63a837d361ce8"
                              data-allow-clear="true"
                              data-select2-id="select2-data-13-ues5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option data-select2-id="select2-data-15-bi43" />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-14-2ar0"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-2o33-container"
                                  aria-controls="select2-2o33-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2o33-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Select option"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Select option
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Options*/}
                          <div className="d-flex">
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/*end::Options*/}
                            {/*begin::Options*/}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={2}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/*end::Options*/}
                          </div>
                          {/*end::Options*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              defaultChecked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                <div className="h-3px w-100 bg-warning" />
              </div>
              {/*end::Col header*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">UI Design</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      Meeting with customer
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post often
                    takes a couple of hours if you can type
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Melody Macy"
                        data-bs-original-title="Melody Macy"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        aria-label="Harry Mcpherson"
                        data-bs-original-title="Harry Mcpherson"
                        data-kt-initialized={1}
                      >
                        <img
                          alt="Pic"
                          src="/metronic8/demo7/assets/media/avatars/300-19.jpg"
                        />
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Susan Redwood"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                          S
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">5</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              {/*begin::Card*/}
              <div className="card mb-6 mb-xl-9">
                {/*begin::Card body*/}
                <div className="card-body">
                  {/*begin::Header*/}
                  <div className="d-flex flex-stack mb-3">
                    {/*begin::Badge*/}
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    {/*end::Badge*/}
                    {/*begin::Menu*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect
                                x={5}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                              />
                              <rect
                                x={14}
                                y={5}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={5}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x={14}
                                y={14}
                                width={5}
                                height={5}
                                rx={1}
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </button>
                      {/*begin::Menu 3*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Heading*/}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Specify a target name for future usage and reference"
                              data-bs-original-title="Specify a target name for future usage and reference"
                              data-kt-initialized={1}
                            />
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/*begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/*begin::Input*/}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  {/*end::Input*/}
                                  {/*end::Label*/}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/*end::Label*/}
                                </label>
                                {/*end::Switch*/}
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 3*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Header*/}
                  {/*begin::Title*/}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      User Module Testing
                    </a>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Content*/}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    First, a disclaimer – the entire process writing a blog post
                    often.
                  </div>
                  {/*end::Content*/}
                  {/*begin::Footer*/}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Alan Warden"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Perry Matthew"
                        data-kt-initialized={1}
                      >
                        <span className="symbol-label bg-success text-inverse-success fw-bold">
                          R
                        </span>
                      </div>
                    </div>
                    {/*end::Users*/}
                    {/*begin::Stats*/}
                    <div className="d-flex my-1">
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
                      </div>
                      {/*end::Stat*/}
                      {/*begin::Stat*/}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={12}
                              width={7}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={6}
                              y={7}
                              width={12}
                              height={2}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      {/*end::Stat*/}
                    </div>
                    {/*end::Stats*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              <a
                href="#"
                className="btn btn-primary er w-100 fs-6 px-8 py-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_target"
              >
                Create New Target
              </a>
            </div>
            {/* end col */}
          </div>
          {/*end::Row*/}
        </div>
        {/*end::Tab pane*/}
        {/*begin::Tab pane*/}
        <div
          id="kt_project_targets_table_pane"
          className="tab-pane fade"
          role="tabpanel"
        >
          <div className="card card-flush">
            <div className="card-body pt-3">
              {/*begin::Table*/}
              <div
                id="kt_profile_overview_table_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="table-responsive">
                  <table
                    id="kt_profile_overview_table"
                    className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold dataTable no-footer"
                  >
                    {/*begin::Table head*/}
                    <thead className="fs-7 text-gray-400 text-uppercase">
                      <tr>
                        <th
                          className="min-w-250px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Target: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Target
                        </th>
                        <th
                          className="min-w-90px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Section: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Section
                        </th>
                        <th
                          className="min-w-150px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Due Date: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Due Date
                        </th>
                        <th
                          className="min-w-90px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Members: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Members
                        </th>
                        <th
                          className="min-w-90px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: 0 }}
                        >
                          Status
                        </th>
                        <th
                          className="min-w-50px sorting"
                          tabIndex={0}
                          aria-controls="kt_profile_overview_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label=": activate to sort column ascending"
                          style={{ width: 0 }}
                        />
                      </tr>
                    </thead>
                    {/*end::Table head*/}
                    {/*begin::Table body*/}
                    <tbody className="fs-6">
                      {/*begin::Table row*/}
                 
                      {/*end::Table row*/}
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Meeting with customer
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            UI Design
                          </span>
                        </td>
                        <td>Sep 9, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Melody Macy"
                              data-bs-original-title="Melody Macy"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="John Mixin"
                              data-bs-original-title="John Mixin"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-14.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Susan Redwood"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                                S
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-primary fw-bold me-auto">
                            In Progress
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            User Module Testing
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Phase 2.6 QA
                          </span>
                        </td>
                        <td>Apr 5, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Alan Warden"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                A
                              </span>
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Robin Watterman"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-success text-inverse-success fw-bold">
                                R
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">
                            Completed
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Sales report page
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            QA
                          </span>
                        </td>
                        <td>Sep 10, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Melody Macy"
                              data-bs-original-title="Melody Macy"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Kristen Goodwin"
                              data-bs-original-title="Kristen Goodwin"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-9.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Mikaela Collins"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-info text-inverse-info fw-bold">
                                M
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">
                            Yet to start
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Meeting with customer
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Prototype
                          </span>
                        </td>
                        <td>Mar 22, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Robin Watterman"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-success text-inverse-success fw-bold">
                                R
                              </span>
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Brian Cox"
                              data-bs-original-title="Brian Cox"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-5.jpg"
                              />
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">
                            Completed
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Design main Dashboard
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            UI Design
                          </span>
                        </td>
                        <td>Sep 4, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Melody Macy"
                              data-bs-original-title="Melody Macy"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-2.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Emma Smith"
                              data-bs-original-title="Emma Smith"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-6.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Lucy Matthews"
                              data-bs-original-title="Lucy Matthews"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-21.jpg"
                              />
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">
                            Completed
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            User Module Testing
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Development
                          </span>
                        </td>
                        <td>Oct 2, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Francis Mitcham"
                              data-bs-original-title="Francis Mitcham"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-20.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Deanna Taylor"
                              data-bs-original-title="Deanna Taylor"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-23.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Mikaela Collins"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-info text-inverse-info fw-bold">
                                M
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light-primary fw-bold me-auto">
                            In Progress
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            To check User Management
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Pahse 3.2
                          </span>
                        </td>
                        <td>Aug 28, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Lucy Matthews"
                              data-bs-original-title="Lucy Matthews"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-21.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Kristen Goodwin"
                              data-bs-original-title="Kristen Goodwin"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-9.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Michelle Swanston"
                              data-bs-original-title="Michelle Swanston"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-7.jpg"
                              />
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">
                            Yet to start
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="fw-bold">
                          <a href="#" className="text-gray-900 text-hover-primary">
                            Create Roles Module
                          </a>
                        </td>
                        <td data-order="Invalid date">
                          <span className="badge badge-light fw-semibold me-auto">
                            Branding
                          </span>
                        </td>
                        <td>Dec 13, 2020</td>
                        <td>
                          {/*begin::Members*/}
                          <div className="symbol-group symbol-hover fs-8">
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              aria-label="Michelle Swanston"
                              data-bs-original-title="Michelle Swanston"
                              data-kt-initialized={1}
                            >
                              <img
                                alt="Pic"
                                src="/metronic8/demo7/assets/media/avatars/300-7.jpg"
                              />
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Robin Watterman"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-success text-inverse-success fw-bold">
                                R
                              </span>
                            </div>
                            <div
                              className="symbol symbol-25px symbol-circle"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Alan Warden"
                              data-kt-initialized={1}
                            >
                              <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                A
                              </span>
                            </div>
                          </div>
                          {/*end::Members*/}
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">
                            Yet to start
                          </span>
                        </td>
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-bg-light btn-active-color-primary btn-sm"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/*end::Table body*/}
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start" />
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end" />
                </div>
              </div>
              {/*end::Table*/}
            </div>
          </div>
        </div>
        {/*end::Tab pane*/}
      </div>
      

    )
}

export default Project;