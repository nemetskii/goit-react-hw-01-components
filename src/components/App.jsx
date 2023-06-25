import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friend_list/FriendList';
import TransactionHistory from './transaction_history/TransactionHistory';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friend_list/friends.json';
import transactions from './transaction_history/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
