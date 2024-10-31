// import { BlogPost } from './models/blog-post.model';

// export class PostDb {
//     static defaultPosts: BlogPost[] = [
//         {
//             id: '1',
//             title: 'Motocross',
//             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut justo id dui tempus varius.

//             Praesent eget nisl eget nisi fermentum gravida. Donec id sagittis sem, id bibendum lacus. Nullam lectus velit, ultrices ac pulvinar ac, molestie nec velit.

//             Nam nibh ipsum, mattis ut lorem ac, tempus sollicitudin mi. Pellentesque et mollis libero, sed posuere erat. Aenean ex est, pretium nec orci vitae, luctus pellentesque quam. Phasellus bibendum magna eu odio porta, non dictum felis imperdiet.

//             Sed commodo sapien vitae nibh vestibulum condimentum. Cras nec tellus orci. Nam vestibulum, odio sed tincidunt tristique, tellus sem gravida nibh, sed faucibus risus libero id justo. Donec urna ex, sagittis nec nulla a, lobortis molestie velit. Duis rutrum pulvinar rutrum. Nullam scelerisque bibendum ultricies. Cras sagittis eleifend ante, et aliquam felis lacinia a. Aliquam eu sapien dolor.

//             Proin cursus tristique dolor in efficitur. Vestibulum suscipit odio id lectus molestie varius. Fusce vehicula nunc ac tincidunt mattis. Pellentesque imperdiet urna ante, sit amet tincidunt nulla tempus vitae. Suspendisse augue nunc, volutpat vel aliquet id, sodales vel neque. Suspendisse ut lectus ut augue malesuada viverra. Nulla pharetra accumsan neque vel bibendum. Nulla vel sagittis orci. Nunc ultrices pretium blandit. Fusce et lacinia erat. Sed laoreet erat in augue lobortis, ut pulvinar lacus tristique.

//             Etiam tincidunt est eu egestas egestas. Maecenas gravida nisi vel tellus malesuada congue. Cras sodales, urna vitae vestibulum vehicula, odio nunc sollicitudin est, eu convallis nisl risus vel ligula. Vivamus leo erat, commodo sed risus at, laoreet suscipit lectus. Quisque nec consectetur arcu, vel euismod purus. Nulla nunc nibh, sodales ac odio eget, porta gravida neque. Phasellus a sagittis quam, sit amet dapibus lectus.

//             Phasellus vitae elit ut enim dapibus ullamcorper. Suspendisse tincidunt hendrerit porttitor. Nulla quam mi, porttitor feugiat tortor in, suscipit laoreet mi. Vestibulum imperdiet egestas accumsan. Integer aliquet viverra mi, ut viverra lorem dictum in. In vitae est non mauris gravida venenatis. Donec in consequat quam, in convallis sem. Nullam eu interdum sapien. Aenean pellentesque eleifend bibendum. Ut viverra, velit non congue molestie, odio enim convallis velit, elementum porttitor lacus dui non ipsum. Mauris hendrerit sem volutpat sem vestibulum elementum.`,
//             tags: ['Motorcycle', 'Sand'],
//             imageUrl: '/images/thrill-trips1.jpg',
//         },
//         {
//             id: '2',
//             title: 'Mountain Climbing',
//             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut justo id dui tempus varius.

//             Praesent eget nisl eget nisi fermentum gravida. Donec id sagittis sem, id bibendum lacus. Nullam lectus velit, ultrices ac pulvinar ac, molestie nec velit.

//             Nam nibh ipsum, mattis ut lorem ac, tempus sollicitudin mi. Pellentesque et mollis libero, sed posuere erat. Aenean ex est, pretium nec orci vitae, luctus pellentesque quam. Phasellus bibendum magna eu odio porta, non dictum felis imperdiet.

//             Sed commodo sapien vitae nibh vestibulum condimentum. Cras nec tellus orci. Nam vestibulum, odio sed tincidunt tristique, tellus sem gravida nibh, sed faucibus risus libero id justo. Donec urna ex, sagittis nec nulla a, lobortis molestie velit. Duis rutrum pulvinar rutrum. Nullam scelerisque bibendum ultricies. Cras sagittis eleifend ante, et aliquam felis lacinia a. Aliquam eu sapien dolor.

//             Proin cursus tristique dolor in efficitur. Vestibulum suscipit odio id lectus molestie varius. Fusce vehicula nunc ac tincidunt mattis. Pellentesque imperdiet urna ante, sit amet tincidunt nulla tempus vitae. Suspendisse augue nunc, volutpat vel aliquet id, sodales vel neque. Suspendisse ut lectus ut augue malesuada viverra. Nulla pharetra accumsan neque vel bibendum. Nulla vel sagittis orci. Nunc ultrices pretium blandit. Fusce et lacinia erat. Sed laoreet erat in augue lobortis, ut pulvinar lacus tristique.

//             Etiam tincidunt est eu egestas egestas. Maecenas gravida nisi vel tellus malesuada congue. Cras sodales, urna vitae vestibulum vehicula, odio nunc sollicitudin est, eu convallis nisl risus vel ligula. Vivamus leo erat, commodo sed risus at, laoreet suscipit lectus. Quisque nec consectetur arcu, vel euismod purus. Nulla nunc nibh, sodales ac odio eget, porta gravida neque. Phasellus a sagittis quam, sit amet dapibus lectus.

//             Phasellus vitae elit ut enim dapibus ullamcorper. Suspendisse tincidunt hendrerit porttitor. Nulla quam mi, porttitor feugiat tortor in, suscipit laoreet mi. Vestibulum imperdiet egestas accumsan. Integer aliquet viverra mi, ut viverra lorem dictum in. In vitae est non mauris gravida venenatis. Donec in consequat quam, in convallis sem. Nullam eu interdum sapien. Aenean pellentesque eleifend bibendum. Ut viverra, velit non congue molestie, odio enim convallis velit, elementum porttitor lacus dui non ipsum. Mauris hendrerit sem volutpat sem vestibulum elementum.`,
//             tags: ['Climbing', 'Hiking', 'Safety'],
//             imageUrl: '/images/thrill-trips.jpg',
//         },
//         {
//             id: '3',
//             title: 'Snow sports',
//             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut justo id dui tempus varius.

//             Praesent eget nisl eget nisi fermentum gravida. Donec id sagittis sem, id bibendum lacus. Nullam lectus velit, ultrices ac pulvinar ac, molestie nec velit.

//             Nam nibh ipsum, mattis ut lorem ac, tempus sollicitudin mi. Pellentesque et mollis libero, sed posuere erat. Aenean ex est, pretium nec orci vitae, luctus pellentesque quam. Phasellus bibendum magna eu odio porta, non dictum felis imperdiet.

//             Sed commodo sapien vitae nibh vestibulum condimentum. Cras nec tellus orci. Nam vestibulum, odio sed tincidunt tristique, tellus sem gravida nibh, sed faucibus risus libero id justo. Donec urna ex, sagittis nec nulla a, lobortis molestie velit. Duis rutrum pulvinar rutrum. Nullam scelerisque bibendum ultricies. Cras sagittis eleifend ante, et aliquam felis lacinia a. Aliquam eu sapien dolor.

//             Proin cursus tristique dolor in efficitur. Vestibulum suscipit odio id lectus molestie varius. Fusce vehicula nunc ac tincidunt mattis. Pellentesque imperdiet urna ante, sit amet tincidunt nulla tempus vitae. Suspendisse augue nunc, volutpat vel aliquet id, sodales vel neque. Suspendisse ut lectus ut augue malesuada viverra. Nulla pharetra accumsan neque vel bibendum. Nulla vel sagittis orci. Nunc ultrices pretium blandit. Fusce et lacinia erat. Sed laoreet erat in augue lobortis, ut pulvinar lacus tristique.

//             Etiam tincidunt est eu egestas egestas. Maecenas gravida nisi vel tellus malesuada congue. Cras sodales, urna vitae vestibulum vehicula, odio nunc sollicitudin est, eu convallis nisl risus vel ligula. Vivamus leo erat, commodo sed risus at, laoreet suscipit lectus. Quisque nec consectetur arcu, vel euismod purus. Nulla nunc nibh, sodales ac odio eget, porta gravida neque. Phasellus a sagittis quam, sit amet dapibus lectus.

//             Phasellus vitae elit ut enim dapibus ullamcorper. Suspendisse tincidunt hendrerit porttitor. Nulla quam mi, porttitor feugiat tortor in, suscipit laoreet mi. Vestibulum imperdiet egestas accumsan. Integer aliquet viverra mi, ut viverra lorem dictum in. In vitae est non mauris gravida venenatis. Donec in consequat quam, in convallis sem. Nullam eu interdum sapien. Aenean pellentesque eleifend bibendum. Ut viverra, velit non congue molestie, odio enim convallis velit, elementum porttitor lacus dui non ipsum. Mauris hendrerit sem volutpat sem vestibulum elementum.`,
//             tags: ['Snow', 'Snowboard', 'Ski'],
//             imageUrl: '/images/thrill-trips2.jpg',
//         },
//     ];
// }
