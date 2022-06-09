import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Current Offers"
        breadcrumbs={[{ name: 'Current Offers', active: true }]}
      >
        
              <div className='cantarli3'>
      <div className='centerlkhra'>
      <Col md="50" sm="50" xs="50">
        <Card>
          <h3 className='cent'>Make your tokens worth more by exchanging your tokens for discount and offers of our current partners. </h3>
            <h5 className='cent1'>choose an offer :</h5>

          <div className='cantarli1'>
                <NumberWidget
                  title="1 Free coffee"
                  number="1$"
                  color="secondary"
                  progress={{
                    value: 75,
                    label: 'prev',
                  }}
                />  
                <Button>select</Button>

                <NumberWidget
                  title="1 Free coffee"
                  number="1$"
                  color="secondary"
                  progress={{
                    value: 75,
                    label: 'prev',
                  }}
                />  
              
              <Button>select</Button>

          </div>
          <div className='cantarli1'>
                <NumberWidget
                  title="1 Free coffee"
                  number="1$"
                  color="secondary"
                  progress={{
                    value: 75,
                    label: 'prev',
                  }}
                />            <Button>select</Button>


                <NumberWidget
                  title="2% Voucher"
                  number="1$"
                  color="secondary"
                  progress={{
                    value: 45,
                    label: 'prev',
                  }}
                />
              
              <Button>select</Button>

          </div>
          <div className='cantarli1'>
                  <NumberWidget
                  title="1 Free coffee"
                  number="1$"
                  color="secondary"
                  progress={{
                    value: 75,
                    label: 'prev',
                  }}
                />              <Button>select</Button>


                <NumberWidget
                  title="2% Voucher"
                  number="1$"
                  color="secondary"
                  progress={{
                    value: 45,
                    label: 'prev',
                  }}
                />
              
              <Button>select</Button>

          </div>
      </Card>
                  </Col>
    </div>





          <Col md="3" sm="12" xs="12">
            <Card>
              <CardHeader>selected Offers</CardHeader>
              <CardBody>
                {productsData.map(
                  ({ id, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      title={title}
                      description={description}
                      right={right}
                    />
                  ),
                )}
                </CardBody>
              </Card>
            </Col>
  </div>
      </Page>
    );
  }
}
export default DashboardPage;
