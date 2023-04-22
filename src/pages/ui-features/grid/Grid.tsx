import { Card } from '@nebular-react/core';
import React from 'react';
import useStyles from './Grid.styles';

export function GridDemo() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <Card.Header>Grid System</Card.Header>
            <Card.Body>
              <h5 className="grid-h">Stacked to horizontal</h5>
              <div className="row show-grid">
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
                <div className="col-md-1">
                  <div>.col-md-1</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-md-8">
                  <div>.col-md-8</div>
                </div>
                <div className="col-md-4">
                  <div>.col-md-4</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-md-4">
                  <div>.col-md-4</div>
                </div>
                <div className="col-md-4">
                  <div>.col-md-4</div>
                </div>
                <div className="col-md-4">
                  <div>.col-md-4</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-md-6">
                  <div>.col-md-6</div>
                </div>
                <div className="col-md-6">
                  <div>.col-md-6</div>
                </div>
              </div>

              <h5 className="grid-h">Mobile and desktop</h5>
              <div className="row show-grid">
                <div className="col-12 col-md-8">
                  <div>.col-12 .col-md-8</div>
                </div>
                <div className="col-6 col-md-4">
                  <div>.col-6 .col-md-4</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-6 col-md-4">
                  <div>.col-6 .col-md-4</div>
                </div>
                <div className="col-6 col-md-4">
                  <div>col-6 .col-md-4</div>
                </div>
                <div className="col-6 col-md-4">
                  <div>.col-6 .col-md-4</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-6">
                  <div>.col-6</div>
                </div>
                <div className="col-6">
                  <div>.col-6</div>
                </div>
              </div>

              <h5 className="grid-h">Mobile, tablet, desktop</h5>
              <div className="row show-grid">
                <div className="col-12 col-sm-6 col-md-8">
                  <div>.col-12 .col-sm-6 .col-md-8</div>
                </div>
                <div className="col-6 col-md-4">
                  <div>.col-6 .col-md-4</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-6 col-sm-4">
                  <div>.col-6 .col-sm-4</div>
                </div>
                <div className="col-6 col-sm-4">
                  <div>.col-6 .col-sm-4</div>
                </div>
                <div className="col-6 col-sm-4">
                  <div>.col-6 .col-sm-4</div>
                </div>
              </div>

              <h5 className="grid-h">Column wrapping</h5>
              <div className="row show-grid">
                <div className="col-9">
                  <div>.col-9</div>
                </div>
                <div className="col-4">
                  <div>
                    .col-4
                    <br />
                    Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as
                    one contiguous unit.
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    .col-6
                    <br />
                    Subsequent columns continue along the new line.
                  </div>
                </div>
              </div>

              <h5 className="grid-h">Responsive column resets</h5>
              <div className="row show-grid">
                <div className="col-6 col-sm-3">
                  <div>
                    .col-6 .col-sm-3
                    <p>Resize your viewport or check it out on your phone for an example.</p>
                  </div>
                </div>
                <div className="col-6 col-sm-3">
                  <div>.col-6 .col-sm-3</div>
                </div>
                <div className="col-6 col-sm-3">
                  <div>.col-6 .col-sm-3</div>
                </div>
                <div className="col-6 col-sm-3">
                  <div>.col-6 .col-sm-3</div>
                </div>
              </div>

              <h5 className="grid-h">Offsetting columns</h5>
              <div className="row show-grid">
                <div className="col-md-4">
                  <div>.col-md-4</div>
                </div>
                <div className="col-md-4 offset-md-4">
                  <div>.col-md-4 .offset-md-4</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-md-3 offset-md-3">
                  <div>.col-md-3 .offset-md-3</div>
                </div>
                <div className="col-md-3 offset-md-3">
                  <div>.col-md-3 .offset-md-3</div>
                </div>
              </div>
              <div className="row show-grid">
                <div className="col-md-6 offset-md-3">
                  <div>.col-md-6 .offset-md-3</div>
                </div>
              </div>

              <h5 className="grid-h">Grid options</h5>
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th />
                      <th>
                        Extra small devices
                        <small>Phones (&lt;576px)</small>
                      </th>
                      <th>
                        Small devices
                        <small>Tablets (≥576px)</small>
                      </th>
                      <th>
                        Medium devices
                        <small>Desktops (≥768px)</small>
                      </th>
                      <th>
                        Large devices
                        <small>Desktops (≥992px)</small>
                      </th>
                      <th>
                        Large devices
                        <small>Desktops (≥1200px)</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Grid behavior
                      </th>
                      <td>Horizontal at all times</td>
                      <td colSpan={4}>Collapsed to start, horizontal above breakpoints</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Container width
                      </th>
                      <td>None (auto)</td>
                      <td>540px</td>
                      <td>720px</td>
                      <td>960px</td>
                      <td>1140px</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Class prefix
                      </th>
                      <td>
                        <code>.col-</code>
                      </td>
                      <td>
                        <code>.col-sm-</code>
                      </td>
                      <td>
                        <code>.col-md-</code>
                      </td>
                      <td>
                        <code>.col-lg-</code>
                      </td>
                      <td>
                        <code>.col-xl-</code>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        # of columns
                      </th>
                      <td colSpan={5}>12</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Gutter width
                      </th>
                      <td colSpan={5}>1.875rem / 30px (15px on each side of a column)</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Nestable
                      </th>
                      <td colSpan={5}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Offsets
                      </th>
                      <td colSpan={5}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Column ordering
                      </th>
                      <td colSpan={5}>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
