const messages = {
  pt: {
    translations: {
      signup: {
        title: "Registro",
        toasts: {
          success: "¡Usuario creado exitosamente! Acceso.",
          fail: "Error al crear usuario. Comprueba los datos proporcionados.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrar",
          login: "¿Ya tienes una cuenta? ¡Entre!",
        },
      },
      login: {
        title: "Acceso",
        form: {
          email: "Email",
          password: "Contraseña",
        },
        buttons: {
          submit: "Accesso",
          register: "¿No tienes una cuenta? ¡Registro!",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la empresa",
          plan: "Departamento",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicia sesión exitosamente!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Servicios hoy:",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡La conexión de WhatsApp se eliminó con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Está seguro? Deberá escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Agregar whatsapp",
          disconnect: "desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "No se pudo iniciar sesión en WhatsApp",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet e inténtelo nuevamente o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando que se lea el código QR",
            content:
              "Haz clic en el botón 'CÓDIGO QR' y escanea el Código QR con tu celular para iniciar la sesión",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Conexión celular perdida",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón Desconectar para obtener un nuevo código QR.",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Estándar",
          actions: "Comportamiento",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar whatsapp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Estándar",
        },
        buttons: {
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
        },
        success: "WhatsApp se guardó correctamente.",
      },
      qrCode: {
        message: "Escanea el QrCode para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado exitosamente!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar  ",
          importTitlte: "Importar contactos",
          deleteMessage:
            "¿Estás seguro de que deseas eliminar este contacto? Se perderán todos los servicios relacionados.",
          importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
        },
        buttons: {
          import: "Importar contactos",
          add: "Agregar contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Comportamiento",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Detalles de contacto",
          extraInfo: "Informaciones adicionales",
          name: "Nombre",
          number: "Número de whatsapp",
          email: "Email",
          extraName: "Nombre del campo",
          extraValue: "Valor",
        },
        buttons: {
          addExtraInfo: "Añadir información",
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado exitosamente.",
      },
      queueModal: {
        title: {
          add: "Agregar cola",
          edit: "Editar cola",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Revisar mensaje",
          token: "Token",
        },
        buttons: {
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuário",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Senha",
          profile: "Perfil",
        },
        buttons: {
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado exitosamente.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo horario",
          edit: "Editar horario",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de envío",
        },
        buttons: {
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
        },
        success: "Cita guardada exitosamente.",
      },
      tagModal: {
        title: {
          add: "Nueva etiqueta",
          edit: "Editar Tag",
          addKanban: "Nuevo carril",
          editKanban: "Editar carril",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada exitosamente.",
        successKanban: "Lane guarda con éxito.",
      },
      kanban: {
        title: "Kanban",
        searchPlaceholder: "Buscar",
        subMenus:{
          list:"Panel",
          tags:"Carriles"
        }
      },
      tagsKanban: {
        title: "Carriles",
        laneDefault: "En abierto",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar este carril?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombree",
          color: "Color",
          tickets: "Tickets",
          actions: "Comportamiento",
        },
        buttons: {
          add: "Nuevo carril",
        },
        toasts: {
          deleted: "Carril eliminado con éxito.",
        },
      },
      chat: {
        noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
          titleFileList: "Lista de archivos"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Sectores",
      },
      tickets: {
        toasts: {
          deleted: "El servicio en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abierto" },
          closed: { title: "Resuelto" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Servicio de búsqueda y mensajes.",
        },
        buttons: {
          showAll: "Todo",
        },
      },
      transferTicketModal: {
        title: "Billete de transferencia",
        fieldLabel: "Escribe para buscar usuarios",
        fieldQueueLabel: "Transferir a cola",
        fieldQueuePlaceholder: "Seleccione una cola",
        noOptions: "No se encontraron usuarios con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Espera",
        assignedHeader: "Servicio",
        noTicketsTitle: "¡Nada aquí!",
        noTicketsMessage:
          "No se encontró ningún servicio con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escriba para buscar el contacto",
        add: "Para agregar",
        buttons: {
          ok: "Ahorrar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Atenciones",
          todolist: "Tareas",
          quickMessages: "Respuestas rápidas",
          contacts: "Contactos",
          queues: "ChatBot",
          tags: "Tags",
          administration: "Administración",
          users: "Usuarios",
          settings: "Ajustes",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Horarios",
          campaigns: "Campañas",
          annoucements: "Boletines",
          chats: "Chat Interno",
          financeiro: "Financiero",
          kanban: "Kanban",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Salir",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "No Notificaciones.",
      },
      quickMessages: {
        title: "Respuestas rápidas",
        buttons: {
          add: "Nueva respuesta",
        },
        dialog: {
          shortcode: "Atajo",
          message: "Respuesta",
        },
      },
      contactLists: {
        title: "Listas de contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Comportamiento",
        },
        buttons: {
          add: "Lista nueva",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Para agregar",
          add: "Para agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Liza",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Para agregar",
          add: "Para agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Ações",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Quieres importar contactos desde esta hoja de cálculo? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva campaña",
          contactLists: "Listas de contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de contactos",
          status: "Estado",
          scheduledAt: "Planificación",
          completedAt: "Terminado",
          confirmation: "Confirmación",
          actions: "Comportamiento",
        },
        dialog: {
          new: "Nueva campaña",
          update: "Editar campaña",
          readonly: "Sólo vista",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de confirmacion 1",
            confirmationMessage2: "Mensaje de confirmacion 2",
            confirmationMessage3: "Mensaje de confirmacion 3",
            confirmationMessage4: "Mensaje de confirmacion 4",
            confirmationMessage5: "Mensaje de confirmacion 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Planificación",
            confirmation: "Confirmación",
            contactList: "Lista de contactos",
          },
          buttons: {
            add: "Para agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparos",
            restart: "Restablecer disparos",
            close: "Cerrar",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro excluído",
        },
      },
      announcements: {
        title: "Boletines",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo boletín",
          contactLists: "Listas de noticias",
        },
        table: {
          priority: "Prioridad",
          title: "Title",
          text: "Texto",
          mediaName: "Arquivo",
          status: "Status",
          actions: "Ações",
        },
        dialog: {
          edit: "Edición del boletín",
          add: "Nuevo boletín",
          update: "Editar boletín",
          readonly: "Sólo vista",
          form: {
            priority: "Prioridad",
            title: "Title",
            text: "Texto",
            mediaPath: "Arquivo",
            status: "Status",
          },
          buttons: {
            add: "Para agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuración de campaña",
      },
      queues: {
        title: "Chatbot",
        table: {
          name: "Nombre",
          color: "Cor",
          greeting: "Mensaje de saludo",
          actions: "Comportamiento",
        },
        buttons: {
          add: "Para agregar cola",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Colas",
      },
      users: {
        title: "Usuarios",
        table: {
          name: "Nombre",
          email: "Email",
          profile: "Perfil",
          actions: "Comportamiento",
        },
        buttons: {
          add: "Para agregar usuario",
        },
        toasts: {
          deleted: "Usuario eliminado exitosamente.",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "Centro de ayuda",
      },
      schedules: {
        title: "Horarios",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar este programa?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de envío",
          status: "Estado",
          actions: "Comportamiento",
        },
        buttons: {
          add: "Nuevo horario",
        },
        toasts: {
          deleted: "Programación eliminada exitosamente.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta etiqueta?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros Tagdos",
          actions: "Comportamiento",
        },
        buttons: {
          add: "Nueva etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada correctamente.",
        },
      },
      settings: {
        success: "La configuración se guardó correctamente.",
        title: "Ajustes",
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Volver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Introduce un mensaje",
        placeholderClosed:
          "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
        signMessage: "Para firmar",
      },
      contactDrawer: {
        header: "Detalles de contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otras informaciones",
      },
      ticketOptionsMenu: {
        schedule: "Planificación",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Notas de contacto",
        appointmentsModal: {
          title: "Notas de contacto",
          textarea: "Observación",
          placeholder: "Ingresa aquí los datos que deseas registrar",
        },
        confirmationModal: {
          title: "Eliminar el ticket de contacto #",
          titleFrom: "En",
          message:
            "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no se puede revertir.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Consulta la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​se ha inicializado. Consulta la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se puede verificar el contacto de WhatsApp. Consulta la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pueden descargar medios de WhatsApp. Consulta la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Consulta la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED:
          "El administrador ha desactivado la creación de usuarios.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontraron contactos con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron boletos con esta identificación.",
        ERR_NO_USER_FOUND: "No se encontraron usuarios con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al buscar el mensaje en WhtasApp, quizás sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elige otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };
