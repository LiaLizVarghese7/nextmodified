import { render } from "@testing-library/react";
import ExpenseDate from './ExpenseDate';
describe('Expense item date test', () => {
    it('should render UI correctly', () => {
        const mockDate ={date: {
            month: 'January', 
            day: '19', 
            year: 2020}
        }
        expect(render(<ExpenseDate {...mockDate}/>)).toMatchSnapshot();
    });
});