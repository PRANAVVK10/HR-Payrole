/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { Card } from "../components/card";
import { ListLayout } from "../components/list-layout";

const Project = () => {
  const itemsNormal = {
    lista: [
      {
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "What is Lorem Ipsum?",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "Why do we use it?",
        subtitle: "The point of using at its layout",
        updatedAt: "2 days ago",
      },
    ],

    listb: [
      {
        uuid: "52f9df20--4c4d-b72c-7bfa4398a450",
        title: "Where can I get some?",
        subtitle: "There are many variations",
        updatedAt: "6 days ago",
      },
      {
        uuid: "52f9df20-9393-4c4d--7bfa4398a451",
        title: "Morbi sagittis tellus a efficitur",
        subtitle: "Etiam mollis eros eget mi.",
        updatedAt: "2 days ago",
      },
    ],
    listc: [
      {
        uuid: "52f9df0-9393-4c4d-b72c-7bfa4398a4477",
        title: "What is Lorem Ipsum?",
        subtitle: "Lorem Ipsum is simply dummy",
        updatedAt: "6 days ago",
      },
      {
        uuid: "52f9df20-933-4c4d-b72c-7bfa4398a448",
        title: "Why do we use it?",
        subtitle: "The point of using at its layout",
        updatedAt: "2 days ago",
      },
    ],

    listd: [
      {
        uuid: "52f9df20-9393-4c4d-b72c-7bfa438a450",
        title: "Where can I get some?",
        subtitle: "There are many variations",
        updatedAt: "6 days ago",
      },
      {
        uuid: "52f9df20-9393-4c4d-b72c-7bfa498a451",
        title: "Morbi sagittis tellus a efficitur",
        subtitle: "Etiam mollis eros eget mi.",
        updatedAt: "2 days ago",
      },
    ],
  };
  const [items, setItems] = useState(itemsNormal);

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy = { ...items };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setItems(listCopy);
  };
  return (
    <div className="tab-content m-5">
      {/*begin::Tab pane*/}
      <div
        id="kt_project_targets_card_pane"
        className="tab-pane fade active show"
        role="tabpanel"
      >
        {/*begin::Row*/}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="row g-9">
            {/*begin::Col*/}

            <ListLayout onDragEnd={onDragEnd} name="lista">
              {items.lista.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card item={item} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </ListLayout>

            <ListLayout onDragEnd={onDragEnd} name="listb">
              {items.listb.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card item={item} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </ListLayout>
            {/*end::Col*/}
            {/*begin::Col*/}
            <ListLayout onDragEnd={onDragEnd} name="listc">
              {items.listc.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card item={item} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </ListLayout>
            {/*end::Col*/}
            {/* begin col */}
            <ListLayout onDragEnd={onDragEnd} name="listd">
              {items.listd.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card item={item} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </ListLayout>
            {/* end col */}
          </div>
        </DragDropContext>
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary"
                        >
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
  );
};

export default Project;
