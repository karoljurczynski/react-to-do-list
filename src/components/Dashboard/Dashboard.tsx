// IMPORTS


import React, { SetStateAction, useEffect, useState } from "react";
import List from "../List/List";
import { Wrapper, TopSection, Search, Sort, MainSection, ToDoList, ListStats, Text, AddIcon, AddButton, SortIcon } from "./DashboardStyles";
import { root, portal } from "../../config/stylesConfig";
import add from '../../images/add.png';
import triangle from '../../images/triangle.png';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addList, clearLists } from "../../redux/actions/listActions";
import { StateInterface } from "../../redux/store/reduxStore";
import { ListInterface, TaskInterface } from "../../redux/reducers/listReducer";


// COMPONENT


const Dashboard: React.FC = (): JSX.Element => {


  // STATE

  
  const state: StateInterface = useSelector((store: StateInterface) => store);
  const setState: Dispatch<any> = useDispatch<Dispatch<any>>();
  const [searchBar, setSearchBar]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");
  const [lastSortType, setLastSortType]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");
  const [isSortDescending, setIsSortDescending]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
  const [isSortMenuEnabled, setIsSortMenuEnabled]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
  const [filteredLists, setFilteredLists]: [ListInterface[], React.Dispatch<SetStateAction<ListInterface[]>>] = useState<ListInterface[]>(state.lists);
  const [selectedList, setSelectedList]: [ListInterface | undefined, React.Dispatch<SetStateAction<ListInterface | undefined>>] = useState<ListInterface | undefined>(undefined);


  // EFFECTS


  // Shows portal after opening a list
  useEffect(() => {
    selectedList
    ? portal.style.display = "flex"
    : portal.style.display = "none";
  }, [ selectedList ]);

  // Adds blur effect on background after opening a list
  useEffect(() => {
    selectedList
    ? root.style.filter = "blur(25px)"
    : root.style.filter = "blur(0px)";
  }, [ selectedList ]);

  // Gets lists from database after mounting
  useEffect(() => {
    getLists();
  }, []);

  // Gets lists to local state after changing global state
  useEffect(() => {
    setFilteredLists(state.lists);
  }, [ state.lists ]);


  // HANDLERS


  const handleListSelect = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const filterForListId = (list: ListInterface): ListInterface | undefined => {
      if (Number(list.id) === Number(target.id))
        return list;
    }
    setSelectedList(state.lists.filter(filterForListId)[0]);
  }
  const handleSearch = (e: React.SyntheticEvent): void => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    setSearchBar(target.value);
    const listNamesFilter = (list: ListInterface): ListInterface | undefined => {
      if (list.name.toLowerCase().includes(target.value.toLowerCase()))
        return list;
    }
    setFilteredLists(state.lists.filter(listNamesFilter));
  }
  const addNewList = (): void => {
    const emptyList: ListInterface = {
      id: "",
      name: "New list",
      task: [],
      creationDate: ""
    };
    setSelectedList(emptyList);
  }
  const closeList = (): void => {
    setSelectedList(undefined);
  }


  // ASYNC FUNCTIONS

  
  const getLists = async (): Promise<void> => {
    const url: string = "https://recruitment.ultimate.systems/to-do-lists";
    const requestData: {method: string, headers: {[key: string]: string}} = {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${state.user.token}`
      }
    };
    try {
      const data: Response = await fetch(url, requestData);
      if (data.status === 200 && data.ok) {
        const lists: any[] = await data.json();
        setState(clearLists());
        lists.forEach((list: any) => {
          let newList: ListInterface = {id: list.id, name: list.name, creationDate: list.created_at, task: list.task};
          setState(addList(newList));
        });
      }
      else {
        throw new Error(`${data.status}`);
      }
    }
    catch (e: unknown) {
      window.alert(`Cannot get lists from database!. Error: ${e}`);
    }
  }


  // SORTING FUNCTIONS


  const openSortMenu = (): void => {
    setIsSortMenuEnabled(!isSortMenuEnabled);
  }
  const sortListsByName = (): void => {
    let sortedLists: ListInterface[] = [];
    isSortDescending
    ? sortedLists = filteredLists.sort((a, b) => b.name.localeCompare(a.name))
    : sortedLists = filteredLists.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredLists(sortedLists);
    setLastSortType("name");
  }
  const sortListsByDate = (): void => {
    let sortedLists: ListInterface[] = [];
    isSortDescending
    ? sortedLists = filteredLists.sort((a, b) => b.creationDate.localeCompare(a.creationDate))
    : sortedLists = filteredLists.sort((a, b) => a.creationDate.localeCompare(b.creationDate));
    setFilteredLists(sortedLists);
    setLastSortType("date");
  }
  const setSortDirection = (): void => {
    setIsSortDescending(!isSortDescending);
    lastSortType === "name"
    ? sortListsByName()
    : sortListsByDate();
  }
  

  // TOOL FUNCTIONS

  
  const countCompletedTasks = (taskArray: TaskInterface[]): number => {
    const filterForCompletedTasks = (arrayItem: TaskInterface): TaskInterface | undefined => {
      if (arrayItem.isDone)
        return arrayItem;
    }
    return taskArray.filter(filterForCompletedTasks).length;
  }
  const countUncompletedTasks = (taskArray: TaskInterface[]): number => {
    const filterForUncompletedTasks = (arrayItem: TaskInterface): TaskInterface | undefined => {
      if (!arrayItem.isDone)
        return arrayItem;
    }
    return taskArray.filter(filterForUncompletedTasks).length;
  }
  const transformCreationDate = (creationDate: string): string => {
    let date: string = "";
    for (let i = 0; i <= 9; i++)
      date += creationDate[i];
    const splittedDate: string[] = date.split("-");
    return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
  }


  // JSX


  return (
    <Wrapper>
      {selectedList && <List list={ selectedList } closeList={ closeList } reloadLists={ getLists } />}

      <TopSection>
        <Search type="text" placeholder="Search" value={ searchBar } onChange={ handleSearch }></Search>
        <SortIcon src={ triangle } onClick={ setSortDirection } isSortDescending={ isSortDescending } />
        <Sort onClick={ openSortMenu }>
          Sort by
          { isSortMenuEnabled &&
            <>
              <Sort child onClick={ sortListsByName }>Name</Sort>
              <Sort child onClick={ sortListsByDate }>Date</Sort>
            </>
          }
        </Sort>
      </TopSection>

      <MainSection>
        <AddButton onClick={ addNewList }>
          <AddIcon src={add} />
        </AddButton>
        { filteredLists.map((list, index) => {
          return (
            <ToDoList key={ index } id={`${list.id}`} onClick={ handleListSelect }>
              <Text type="listName">{ list.name }</Text>
              <Text type="listDate">{`Created at: ${transformCreationDate(list.creationDate)}`}</Text>
              <ListStats>
                <Text type="stats">{`Completed: ${countCompletedTasks(list.task)}`}</Text>
                <Text type="stats">{`Uncompleted: ${countUncompletedTasks(list.task)}`}</Text>
                <Text type="stats">{`All: ${countCompletedTasks(list.task) + countUncompletedTasks(list.task)}`}</Text>
              </ListStats>
            </ToDoList>
          )
        })}
      </MainSection>
      
    </Wrapper>
  )
}


// EXPORT


export default Dashboard;