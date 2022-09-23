import { render } from "@testing-library/react";
import ExpenseItem from './ExpenseItem'
describe('Expense item date test', () => {
    it('should render UI correctly', () => {
        const mockItem ={
        id: 7, 
        title: 'Chocolate', 
        amount: 133, 
        date: {
            day:"18",
            month: "April",
            year: 2019}
        }
        expect(render(<ExpenseItem {...mockItem}/>)).toMatchSnapshot();
    });
});