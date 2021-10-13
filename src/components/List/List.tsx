// IMPORTS


import ReactDOM from "react-dom";
import { BottomSection, ButtonsSection, Checkbox, ListNameInput, Task, TaskNameInput, MainSection, Wrapper, TopSection } from "./ListStyles";
import Button from "../_reusables/Button/Button";
import { portal } from "../../config/stylesConfig";
import React, { SetStateAction, useState } from "react";
import { StateInterface } from "../../redux/store/reduxStore";
import { useSelector } from "react-redux";
import { ListInterface, TaskInterface } from "../../redux/reducers/listReducer";


// INTERFACES


interface ListProps {
  list: ListInterface;
  closeList: () => void;
  reloadLists: () => void;
}


// VARIABLES


const initialNewTask: TaskInterface = {name: "", isDone: false};


// COMPONENT


const List: React.FC<ListProps> = ({ list, closeList, reloadLists }): JSX.Element => {
  

  // STATE


  const state: StateInterface = useSelector((store: StateInterface) => store);
  const [newTask, setNewTask]: [TaskInterface, React.Dispatch<SetStateAction<TaskInterface>>] = useState<TaskInterface>(initialNewTask);
  const [listName, setListName]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>(list.name);
  const [tasks, setTasks]: [TaskInterface[], React.Dispatch<SetStateAction<TaskInterface[]>>] = useState<TaskInterface[]>(list.task);
  

  // NEW TASK ADDING


  const handleNewTaskNameChange = (e: React.SyntheticEvent): void => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    setNewTask({ ...newTask, name: target.value });
  }
  const handleNewTaskCheckboxChange = (e: React.SyntheticEvent): void  => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    setNewTask({ ...newTask, isDone: target.checked });
  }
  const addNewTask = (): void => {
    setTasks([ ...tasks, newTask ]);
    setNewTask(initialNewTask);
  }
  const clearNewTask = (): void => {
    setNewTask(initialNewTask);
  }


  // EXISTING TASKS EDITING


  const handleTaskNameChange = (e: React.SyntheticEvent): void  => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const previousTasks: TaskInterface[] = [...tasks];
    previousTasks[Number(target.id)].name = target.value;
    setTasks(previousTasks);
  }
  const handleTaskCheckboxChange = (e: React.SyntheticEvent): void  => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const previousTasks: TaskInterface[] = [...tasks];
    previousTasks[Number(target.id)].isDone = target.checked;
    setTasks(previousTasks);
  }


  // LIST EDITING

  const closeListNameChange = (e: React.SyntheticEvent): void => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    setListName(target.value);
  }
  const saveListEdit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    if (list.id)
      await updateList();
    else
      await addList();
    reloadLists();
    closeList();
  }
  const cancelListEdit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    closeList();
  }
  const handleDeleteList = async (): Promise<void> => {
    await deleteList();
    reloadLists();
    closeList();
  }


  // ASYNC


  const addList = async (): Promise<void> => {
    const url: string = "https://recruitment.ultimate.systems/to-do-lists";
    const requestData: {method: string, type: string, headers: {[key: string]: string}, body: string} = {
      method: "POST",
      type: 'cors',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${state.user.token}`
      },
      body: JSON.stringify({
        "name": listName,
        "task": tasks
      })
    };
    try {
      await fetch(url, requestData);

    }
    catch (e: unknown) {
      console.error(e);
      window.alert(`Cannot log in user. Error: ${e}`);
    }
  }
  const updateList = async (): Promise<void> => {
    const url: string = `https://recruitment.ultimate.systems/to-do-lists/${list.id}`;
    const requestData: {method: string, type: string, headers: {[key: string]: string}, body: string} = {
      method: "PUT",
      type: 'cors',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${state.user.token}`
      },
      body: JSON.stringify({
        "name": listName,
        "task": tasks
      })
    };
    try {
      await fetch(url, requestData);
    }
    catch (e: unknown) {
      console.error(e);
      window.alert(`Cannot log in user. Error: ${e}`);
    }
  }
  const deleteList = async (): Promise<void> => {
    const url: string = `https://recruitment.ultimate.systems/to-do-lists/${list.id}`;
    const requestData: {method: string, type: string, headers: {[key: string]: string}} = {
      method: "DELETE",
      type: 'cors',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${state.user.token}`
      }
    };
    try {
      await fetch(url, requestData);
    }
    catch (e: unknown) {
      console.error(e);
      window.alert(`Cannot log in user. Error: ${e}`);
    }
  }
  

  // JSX


  return ReactDOM.createPortal(
    <Wrapper>

      <TopSection>
        <ListNameInput type="text" value={ listName } onChange={ closeListNameChange } placeholder="Enter list title"></ListNameInput>
      </TopSection>

      <MainSection>
        { tasks.length > 0 && tasks.map((task, index) => {
          return (
            <Task key={ index }>
              <Checkbox 
                type="checkbox" 
                id={`${index}`} 
                checked={ task.isDone ? true : false } 
                onChange={ handleTaskCheckboxChange } />
              <TaskNameInput 
                type="text" 
                id={`${index}`} 
                value={ task.name } 
                onChange={ handleTaskNameChange } />
            </Task>
          )
        })}
        <Task>
          <Checkbox 
            type="checkbox" 
            checked={ newTask.isDone ? true : false } 
            onChange={ handleNewTaskCheckboxChange } />
          <TaskNameInput 
            type="text"
            placeholder="Task name"
            value={ newTask.name } 
            onChange={ handleNewTaskNameChange } />
        </Task>
      </MainSection>

      <ButtonsSection>
          <Button 
            width={ 128 } 
            height={ 44 } 
            fontSize={ 24 } 
            secondary 
            onClick={ clearNewTask } 
            disabled={ (newTask.name.length > 0 || newTask.isDone) ? false : true }>CANCEL
          </Button>
          <Button 
            width={ 128 } 
            height={ 44 } 
            fontSize={ 24 } 
            margin="0 0 0 67px" 
            primary 
            onClick={ addNewTask } 
            disabled={ newTask.name.length > 0 ? false : true }>ADD
          </Button>
        </ButtonsSection>

      <BottomSection>
        <Button 
          width={ 180 } 
          height={ 56 } 
          fontSize={ 48 } 
          margin="0 0 36px 68px" 
          tertiary 
          onClick={ cancelListEdit }>CANCEL
        </Button>
        <Button 
          width={ 239 } 
          height={ 78 } 
          fontSize={ 36 }  
          margin="0 0 26px 0" 
          secondary 
          onClick={ handleDeleteList }>DELETE
        </Button>
        <Button 
          width={ 239 } 
          height={ 78 } 
          fontSize={ 36 } 
          margin="0 38px 26px 0" 
          primary 
          onClick={ saveListEdit } 
          disabled={ listName.length > 0 ? false : true }>SAVE
        </Button>
      </BottomSection>

    </Wrapper>,
    portal
  )
}


// EXPORT


export default List;