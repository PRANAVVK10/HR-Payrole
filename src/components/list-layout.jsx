import React from "react";
import { Droppable } from "react-beautiful-dnd";

export const ListLayout = ({ children, name, onDragEnd }) => {
  return (
    <Droppable droppableId={name}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className="col-md-3 col-lg-12 col-xl-3">
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
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
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
          {children}
          {provided.placeholder}
          <a
            href="#"
            className="btn btn-primary er w-100 fs-6 px-8 py-4"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_new_target"
          >
            Create New Target
          </a>
        </div>
      )}
    </Droppable>
  );
};
