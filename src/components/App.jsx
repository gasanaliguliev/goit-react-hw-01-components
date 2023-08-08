import {Profile} from '../components/profile/Profile'; 
import user from '../data/user.json';
import {Statistics} from '../components/statistic/Statistics';
import data from '../data/data.json';
import {FriendList} from '../components/friendlist/Friendslist';
import friends from '../data/friends.json';
import {TransactionHistory} from '../components/transactions/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
    /*     display: 'flex', */
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        backgroundColor: 'rgb(204,255,204)',
        paddingTop: '15px',
        paddingBottom: '15px'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};